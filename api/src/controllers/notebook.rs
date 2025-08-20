use axum::{Extension, Json};
use sqlx::{query, query_as};

use crate::{
    core::{error::server_error_response::ServerResult, validated_json::ValidatedJson},
    middleware::notebook::NotebookExt,
    models::notebook::{Notebook, NotebookRow, NotebookWithNoteRow, Notebooks, ToNotebooks},
    requests::notebook::{CreateNotebookRequest, UpdateNotebookRequest},
    responses::{message::Message, notebook::NotebookWithMessageResponse},
    routes::main::DBExt,
    utils::query::QueryUtil,
};

pub struct NotebookController;

impl NotebookController {
    pub async fn create_notebook(
        Extension(db): DBExt,
        ValidatedJson(req_body): ValidatedJson<CreateNotebookRequest>,
    ) -> ServerResult<Json<NotebookWithMessageResponse>> {
        const DEFAULT_COLOR: &str = "#4b98ff";
        let color = req_body.color.unwrap_or_else(|| DEFAULT_COLOR.to_string());

        let notebook_row = query_as!(
            NotebookRow,
            r#"
            INSERT INTO Notebook (title, color)
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
            ORDER BY n.modified_at DESC, note.modified_at DESC NULLS LAST
            "#
        )
        .fetch_all(&db)
        .await?;

        Ok(Json::from(rows.to_notebooks()))
    }

    pub async fn get_notebook(Extension(notebook): NotebookExt) -> ServerResult<Json<Notebook>> {
        Ok(Json::from(notebook))
    }

    pub async fn update_notebook(
        Extension(db): DBExt,
        Extension(notebook): NotebookExt,
        Json(req_body): Json<UpdateNotebookRequest>,
    ) -> ServerResult<Json<NotebookWithMessageResponse>> {
        let mut tx = db.begin().await?;

        let notebook_row = query_as!(
            NotebookRow,
            r#"
            UPDATE Notebook
            SET 
                title = COALESCE($1, title),
                color = COALESCE($2, color)
            WHERE id = $3
            RETURNING
                id, title, color, created_at, modified_at
            "#,
            req_body.title,
            req_body.color,
            notebook.id,
        )
        .fetch_one(&mut *tx)
        .await;

        match notebook_row {
            Ok(notebook_row) => {
                tx.commit().await?;

                let mut new_notebook: Notebook = notebook_row.into();

                new_notebook.notes = notebook.notes.clone();

                let response = NotebookWithMessageResponse {
                    notebook: new_notebook,
                    message: "Successfully updated Notebook.".to_string(),
                };

                Ok(Json::from(response))
            }
            Err(error) => {
                tx.rollback().await?;

                Err(error.into())
            }
        }
    }

    pub async fn delete_notebook(
        Extension(db): DBExt,
        Extension(notebook): NotebookExt,
    ) -> ServerResult<Json<Message>> {
        let mut tx = db.begin().await?;

        let result = query!(
            r#"
            DELETE FROM Notebook
            WHERE id = $1
            "#,
            notebook.id
        )
        .execute(&mut *tx)
        .await?;

        let tx = QueryUtil::verify_one_row_affected(result.rows_affected(), tx).await?;

        tx.commit().await?;

        let response = Message {
            message: "Successfully deleted Notebook.".to_string(),
        };

        Ok(Json::from(response))
    }
}
