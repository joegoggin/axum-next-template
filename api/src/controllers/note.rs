use axum::{Extension, Json, http::StatusCode};
use sqlx::{query, query_as};

use crate::{
    core::error::{
        server_error::ServerError,
        server_error_response::{ServerErrorResponse, ServerResult},
    },
    models::note::{Note, Notes},
    requests::note::CreateNoteRequest,
    responses::{message::Message, note::NoteWithMessageResponse},
    routes::main::DBExt,
    utils::query::QueryUtil,
};

pub struct NoteController;

impl NoteController {
    pub async fn create_note(
        Extension(db): DBExt,
        Json(req_body): Json<CreateNoteRequest>,
    ) -> ServerResult<Json<NoteWithMessageResponse>> {
        let mut tx = db.begin().await?;

        let row = query!(
            r#"
            SELECT id
            FROM Notebook
            WHERE id = $1
            "#,
            req_body.notebook_id,
        )
        .fetch_optional(&mut *tx)
        .await?;

        if row.is_none() {
            tx.rollback().await?;

            let error_message =
                format!("`Notebook` with id of {} not found.", req_body.notebook_id);
            let error = ServerError::new(Some("notebook_id"), &error_message);

            return Err(ServerErrorResponse::new_with_single_error(
                StatusCode::NOT_FOUND,
                error,
            ));
        }

        let note = query_as!(
            Note,
            r#"
            INSERT INTO Note (title, content, color, notebook_id)
            VALUES ($1, $2, $3, $4)
            RETURNING id, title, content, color, notebook_id, created_at, modified_at
            "#,
            req_body.title,
            req_body.content,
            req_body.color,
            req_body.notebook_id
        )
        .fetch_one(&mut *tx)
        .await?;

        let result = query!(
            r#"
            UPDATE Notebook 
            SET
                modified_at = Now()
            WHERE id = $1
            "#,
            req_body.notebook_id
        )
        .execute(&mut *tx)
        .await?;

        let tx = QueryUtil::verify_one_row_effected(result.rows_affected(), tx).await?;

        tx.commit().await?;

        let response = NoteWithMessageResponse {
            note,
            message: "Successfully created notebook".to_string(),
        };

        Ok(Json::from(response))
    }

    //  TODO: add get_notes controller
    pub async fn get_notes() -> ServerResult<Json<Notes>> {
        todo!()
    }

    // TODO: add get_note controller
    pub async fn get_note() -> ServerResult<Json<Note>> {
        todo!()
    }

    // TODO: add update_note controller
    pub async fn update_note() -> ServerResult<Json<NoteWithMessageResponse>> {
        todo!()
    }

    // TODO: add delete_note controller
    pub async fn delete_note() -> ServerResult<Json<Message>> {
        todo!()
    }
}
