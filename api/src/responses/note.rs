use serde::Serialize;

use crate::models::note::Note;

#[derive(Serialize)]
pub struct NoteWithMessageResponse {
    pub note: Note,
    pub message: String,
}
