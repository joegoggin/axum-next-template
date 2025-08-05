use std::collections::HashMap;

use axum::{Extension, Json, http::response};
use sqlx::{query, query_as};

use crate::{
    core::error::server_error_response::ServerResult,
    models::{
        note::{Note, Notes},
        notebook::{Notebook, NotebookRow, Notebooks},
    },
    requests::notebook::CreateNotebookRequest,
    responses::{message::Message, notebook::NotebookWithMessageResponse},
    routes::main::DBExt,
};

pub struct NotebookController;

impl NotebookController {
    pub async fn create_notebook(
        Extension(db): DBExt,
        Json(req_body): Json<CreateNotebookRequest>,
    ) -> ServerResult<Json<NotebookWithMessageResponse>> {
        let color = match req_body.color {
            Some(color) => color,
            None => "#4b98ff".to_string(),
        };

        let notebook_row = query_as!(
            NotebookRow,
            r#"
            INSERT INTO notebook (title, color)
            VALUES ($1, $2)
            RETURNING id, title, color, created_at, modified_at 
            "#,
            req_body.title,
            color
        )
        .fetch_one(&db)
        .await?;

        let response = NotebookWithMessageResponse {
            notebook: notebook_row.into(),
            message: "Successfully created notebook.".to_string(),
        };

        Ok(Json::from(response))
    }

    pub async fn get_notebooks(Extension(db): DBExt) -> ServerResult<Json<Notebooks>> {
        let rows = sqlx::query!(
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
            ORDER BY n.modified_at DESC, note.modified_at DESC
            "#
        )
        .fetch_all(&db)
        .await?;

        let mut notebook_map: HashMap<String, Notebook> = HashMap::new();

        for row in rows {
            let notebook_id = row.notebook_id.to_string();

            let notebook = notebook_map.entry(notebook_id.clone()).or_insert(Notebook {
                id: notebook_id.clone(),
                title: row.notebook_title,
                color: row.notebook_color,
                notes: vec![],
                created_at: row.notebook_created_at,
                modified_at: row.notebook_modified_at,
            });

            if let (Some(id), Some(title), Some(content), Some(color)) = (
                row.note_id,
                row.note_title,
                row.note_content,
                row.note_color,
            ) {
                notebook.notes.push(Note {
                    id: id.to_string(),
                    title,
                    content,
                    color,
                    notebook_id,
                })
            }
        }

        let response = notebook_map.into_values().collect::<Notebooks>();

        Ok(Json::from(response))
    }

    // TODO: add get_notebook controller
    pub async fn get_notebook() -> ServerResult<Json<Notebook>> {
        todo!()
    }

    // TODO: add update_notebook controller
    pub async fn update_notebook() -> ServerResult<Json<NotebookWithMessageResponse>> {
        todo!()
    }

    // TODO: add delete_notebook controller
    pub async fn delete_notebook() -> ServerResult<Json<Message>> {
        todo!()
    }
}
