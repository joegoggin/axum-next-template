use std::str::FromStr;

use axum::{
    Extension,
    extract::{Path, Request},
    http::StatusCode,
    middleware::Next,
    response::{IntoResponse, Response},
};
use sqlx::query;
use uuid::Uuid;

use crate::{
    core::error::server_error_response::{ServerErrorResponse, ServerResult},
    models::{note::Note, notebook::Notebook},
    routes::main::DBExt,
};

pub type NotebookExt = Extension<Notebook>;

pub struct NotebookMiddleware;

impl NotebookMiddleware {
    pub async fn add_notebook_extension(
        Extension(db): DBExt,
        Path(notebook_id): Path<String>,
        mut req: Request,
        next: Next,
    ) -> ServerResult<Response> {
        let rows = query!(
            r#"
            SELECT 
	            n.id as notebook_id,
                n.title as notebook_title,
                n.color as notebook_color,
                n.created_at as notebook_created_at,
                n.modified_at as notebook_modified_at,
                note.id as "note_id?",
                note.title as "note_title?",
   	            note.content as "note_content?",
                note.color as "note_color?",
                note.created_at as "note_created_at?",
                note.modified_at as "note_modified_at?"
            FROM Notebook n
            LEFT JOIN Note note ON n.id = note.notebook_id
            WHERE n.id = $1
            ORDER BY note.modified_at DESC 
            "#,
            Uuid::from_str(&notebook_id)?
        )
        .fetch_all(&db)
        .await?;

        if rows.is_empty() {
            let error_message = format!("Notebook with id of {} not found.", notebook_id);

            return Err(ServerErrorResponse::new_with_message(
                StatusCode::NOT_FOUND,
                error_message,
            ));
        }

        let mut notebook = Notebook {
            id: rows[0].notebook_id.to_string(),
            title: rows[0].notebook_title.clone(),
            color: rows[0].notebook_color.clone(),
            created_at: rows[0].notebook_created_at,
            modified_at: rows[0].notebook_modified_at,
            notes: vec![],
        };

        for row in rows {
            if let (
                Some(id),
                Some(title),
                Some(content),
                Some(color),
                Some(created_at),
                Some(modified_at),
            ) = (
                row.note_id,
                row.note_title,
                row.note_content,
                row.note_color,
                row.note_created_at,
                row.note_modified_at,
            ) {
                notebook.notes.push(Note {
                    id: id.to_string(),
                    title,
                    content,
                    color,
                    created_at,
                    modified_at,
                    notebook_id: notebook_id.to_string(),
                });
            }
        }

        req.extensions_mut().insert(notebook);

        Ok(next.run(req).await.into_response())
    }
}
