use axum::{Extension, Json, http::StatusCode};
use sqlx::{query, query_as};

use crate::{
    core::{
        error::{
            server_error::ServerError,
            server_error_response::{ServerErrorResponse, ServerResult},
        },
        validated_json::ValidatedJson,
    },
    middleware::note::NoteExt,
    models::note::{Note, Notes},
    requests::note::{CreateNoteRequest, UpdateNoteRequest},
    responses::{message::Message, note::NoteWithMessageResponse},
    routes::main::DBExt,
    utils::query::QueryUtil,
};

pub struct NoteController;

impl NoteController {
    pub async fn create_note(
        Extension(db): DBExt,
        ValidatedJson(req_body): ValidatedJson<CreateNoteRequest>,
    ) -> ServerResult<Json<NoteWithMessageResponse>> {
        const DEFAULT_COLOR: &str = "#4b98ff";
        let color = req_body.color.unwrap_or_else(|| DEFAULT_COLOR.to_string());

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
            color,
            req_body.notebook_id
        )
        .fetch_one(&mut *tx)
        .await;

        match note {
            Ok(note) => {
                tx.commit().await?;

                let response = NoteWithMessageResponse {
                    note,
                    message: "Successfully created Note".to_string(),
                };

                Ok(Json::from(response))
            }
            Err(error) => {
                tx.rollback().await?;

                Err(ServerErrorResponse::new_internal_server_error(error))
            }
        }
    }

    pub async fn get_notes(Extension(db): DBExt) -> ServerResult<Json<Notes>> {
        let notes = query_as!(
            Note,
            r#"
            SELECT * 
            FROM Note
            ORDER BY modified_at DESC
            "#,
        )
        .fetch_all(&db)
        .await?;

        Ok(Json::from(notes))
    }

    pub async fn get_note(Extension(note): NoteExt) -> ServerResult<Json<Note>> {
        Ok(Json::from(note))
    }

    pub async fn update_note(
        Extension(db): DBExt,
        Extension(note): NoteExt,
        Json(req_body): Json<UpdateNoteRequest>,
    ) -> ServerResult<Json<NoteWithMessageResponse>> {
        let mut tx = db.begin().await?;

        let note = query_as!(
            Note,
            r#"
            UPDATE Note
            SET 
                title = COALESCE($1, title),
                content = COALESCE($2, content),
                color = COALESCE($3, color), 
                notebook_id = COALESCE($4, notebook_id)
            WHERE id = $5
            RETURNING
                id, title, content, color, notebook_id, created_at, modified_at
            "#,
            req_body.title,
            req_body.content,
            req_body.color,
            req_body.notebook_id,
            note.id
        )
        .fetch_one(&mut *tx)
        .await;

        match note {
            Ok(note) => {
                tx.commit().await?;

                let response = NoteWithMessageResponse {
                    note,
                    message: "Successfully updated Note.".to_string(),
                };

                Ok(Json::from(response))
            }
            Err(error) => {
                tx.rollback().await?;

                Err(ServerErrorResponse::new_internal_server_error(error))
            }
        }
    }

    pub async fn delete_note(
        Extension(db): DBExt,
        Extension(note): NoteExt,
    ) -> ServerResult<Json<Message>> {
        let mut tx = db.begin().await?;

        let result = query!(
            r#"
            DELETE FROM Note 
            WHERE id = $1
            "#,
            note.id
        )
        .execute(&mut *tx)
        .await?;

        let tx = QueryUtil::verify_one_row_affected(result.rows_affected(), tx).await?;

        tx.commit().await?;

        let response = Message {
            message: "Successfully deleted Note.".to_string(),
        };

        Ok(Json::from(response))
    }
}
