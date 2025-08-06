use std::{collections::HashMap, str::FromStr};

use axum::{Extension, Json, extract::Path};
use sqlx::{query, query_as};
use uuid::Uuid;

use crate::{
    core::error::server_error_response::{ServerErrorResponse, ServerResult},
    middleware::notebook::NotebookExt,
    models::{
        note::Note,
        notebook::{Notebook, NotebookRow, Notebooks},
    },
    requests::notebook::{CreateNotebookRequest, UpdateNotebookRequest},
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
                    notebook_id,
                    created_at,
                    modified_at,
                })
            }
        }

        let response = notebook_map.into_values().collect::<Notebooks>();

        Ok(Json::from(response))
    }

    pub async fn get_notebook(Extension(notebook): NotebookExt) -> ServerResult<Json<Notebook>> {
        Ok(Json::from(notebook))
    }

    pub async fn update_notebook(
        Extension(db): DBExt,
        Extension(notebook): NotebookExt,
        Json(res_body): Json<UpdateNotebookRequest>,
    ) -> ServerResult<Json<NotebookWithMessageResponse>> {
        let mut tx = db.begin().await?;

        let result = query!(
            r#"
            UPDATE Notebook
            SET 
                title = COALESCE($1, title),
                color = COALESCE($2, color), 
                modified_at = NOW()
            WHERE id = $3
            "#,
            res_body.title,
            res_body.color,
            Uuid::from_str(&notebook.id)?,
        )
        .execute(&mut *tx)
        .await?;

        if result.rows_affected() != 1 {
            tx.rollback().await?;

            let error_message = format!(
                "Query: {} rows affected but expected 1 row affected",
                result.rows_affected()
            );

            return Err(ServerErrorResponse::new_internal_server_error(
                &error_message,
            ));
        }

        tx.commit().await?;

        let mut notebook = notebook.clone();

        if let Some(title) = res_body.title {
            notebook.title = title;
        }

        if let Some(color) = res_body.color {
            notebook.color = color;
        }

        let response = NotebookWithMessageResponse {
            notebook,
            message: "Successfully updated Notebook.".to_string(),
        };

        Ok(Json::from(response))
    }

    // TODO: add delete_notebook controller
    pub async fn delete_notebook() -> ServerResult<Json<Message>> {
        todo!()
    }
}
