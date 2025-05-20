use axum::{
    Extension,
    extract::{Path, Request},
    http::StatusCode,
    middleware::Next,
    response::{IntoResponse, Response},
};
use entity::note;
use sea_orm::{EntityTrait, prelude::Uuid};

use crate::{
    core::error::server_error_response::{ServerErrorResponse, ServerResult},
    routes::main::DBExt,
};

pub type NoteModelExt = Extension<note::Model>;

pub struct NoteMiddleware;

impl NoteMiddleware {
    pub async fn add_note_extension(
        Extension(db): DBExt,
        Path(note_id): Path<Uuid>,
        mut req: Request,
        next: Next,
    ) -> ServerResult<Response> {
        let model = note::Entity::find_by_id(note_id).one(&db).await?;

        match model {
            Some(model) => {
                req.extensions_mut().insert(model);
            }
            None => {
                let message = format!("Note with id of {} not found.", note_id);

                return Err(ServerErrorResponse::new_with_message(
                    StatusCode::NOT_FOUND,
                    &message,
                ));
            }
        }

        Ok(next.run(req).await.into_response())
    }
}
