use axum::response::Response;

use crate::core::error::server_error_response::ServerResult;

pub struct NoteMiddleware;

impl NoteMiddleware {
    // TODO: add add_note_extension middleware
    pub async fn add_note_extension() -> ServerResult<Response> {
        todo!()
    }
}
