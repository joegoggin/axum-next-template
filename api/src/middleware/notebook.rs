use std::str::FromStr;

use axum::{
    Extension,
    extract::{Path, Request},
    middleware::Next,
    response::{IntoResponse, Response},
};
use sqlx::query_as;
use uuid::Uuid;

use crate::{
    core::error::server_error_response::ServerResult,
    models::notebook::{Notebook, NotebookWithNoteRow},
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
        let rows = query_as!(
            NotebookWithNoteRow,
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

        let notebook = Notebook::try_from(rows)?;

        req.extensions_mut().insert(notebook);

        Ok(next.run(req).await.into_response())
    }
}
