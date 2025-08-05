use axum::Json;

use crate::{
    core::error::server_error_response::ServerResult,
    models::note::{Note, Notes},
    responses::{message::Message, note::NoteWithMessageResponse},
};

pub struct NoteController;

impl NoteController {
    // TODO: add create_note controller
    pub async fn create_note() -> ServerResult<Json<NoteWithMessageResponse>> {
        todo!()
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
