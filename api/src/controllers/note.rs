use axum::{Extension, Json};
use entity::note;
use sea_orm::{ActiveModelTrait, ActiveValue::Set, EntityTrait};

use crate::{
    core::{error::server_error_response::ServerResult, validated_json::ValidatedJson},
    middleware::note::NoteModelExt,
    models::note::{Note, Notes, ToNotes},
    requests::note::{CreateNoteRequest, UpdateNoteRequest},
    responses::{message::Message, note::NoteWithMessageResponse},
    routes::main::DBExt,
};

pub struct NoteController;

impl NoteController {
    pub async fn create_note(
        Extension(db): DBExt,
        ValidatedJson(req_body): ValidatedJson<CreateNoteRequest>,
    ) -> ServerResult<Json<NoteWithMessageResponse>> {
        let mut active_model = note::ActiveModel {
            title: Set(req_body.title),
            content: Set(req_body.content),
            notebook_id: Set(req_body.notebook_id),
            ..Default::default()
        };

        if let Some(color) = req_body.color {
            active_model.color = Set(color)
        }

        let model = note::Entity::insert(active_model)
            .exec_with_returning(&db)
            .await?;

        let response = NoteWithMessageResponse {
            note: model.into(),
            message: "Successfully created note.".to_string(),
        };

        Ok(Json(response))
    }

    pub async fn get_notes(Extension(db): DBExt) -> ServerResult<Json<Notes>> {
        let notes: Notes = note::Entity::find().all(&db).await?.to_notes();

        Ok(Json(notes))
    }

    pub async fn get_note(Extension(note_model): NoteModelExt) -> ServerResult<Json<Note>> {
        let note: Note = note_model.into();

        Ok(Json(note))
    }

    pub async fn update_note(
        Extension(db): DBExt,
        Extension(note_model): NoteModelExt,
        Json(req_body): Json<UpdateNoteRequest>,
    ) -> ServerResult<Json<NoteWithMessageResponse>> {
        let mut active_model: note::ActiveModel = note_model.into();

        if let Some(title) = req_body.title {
            active_model.title = Set(title);
        }

        if let Some(content) = req_body.content {
            active_model.content = Set(content);
        }

        if let Some(color) = req_body.color {
            active_model.color = Set(color);
        }

        let updated_model = active_model.update(&db).await?;

        let response = NoteWithMessageResponse {
            note: updated_model.into(),
            message: "Note successfully updated.".to_string(),
        };

        Ok(Json(response))
    }

    pub async fn delete_note(
        Extension(db): DBExt,
        Extension(note_model): NoteModelExt,
    ) -> ServerResult<Json<Message>> {
        note::Entity::delete_by_id(note_model.id).exec(&db).await?;

        let response = Message {
            message: "Note successfully deleted.".to_string(),
        };

        Ok(Json(response))
    }
}
