use axum::{
    Extension,
    extract::{Path, Request},
    http::StatusCode,
    middleware::Next,
    response::{IntoResponse, Response},
};
use sqlx::query_as;
use uuid::Uuid;

use crate::{
    core::error::server_error_response::{ServerErrorResponse, ServerResult},
    models::note::Note,
    routes::main::DBExt,
};

pub type NoteExt = Extension<Note>;

pub struct NoteMiddleware;

impl NoteMiddleware {
    pub async fn add_note_extension(
        Extension(db): DBExt,
        Path(note_id): Path<Uuid>,
        mut req: Request,
        next: Next,
    ) -> ServerResult<Response> {
        let note = query_as!(
            Note,
            r#"
            SELECT *
            FROM Note
            WHERE id = $1
            "#,
            note_id
        )
        .fetch_optional(&db)
        .await?;

        match note {
            Some(note) => {
                req.extensions_mut().insert(note);

                Ok(next.run(req).await.into_response())
            }
            None => {
                let error_message = format!("Note with id of {} not found.", note_id);

                Err(ServerErrorResponse::new_with_message(
                    StatusCode::NOT_FOUND,
                    error_message,
                ))
            }
        }
    }
}
