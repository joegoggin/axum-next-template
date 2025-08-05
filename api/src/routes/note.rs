use axum::{
    Router,
    routing::{delete, get, post, put},
};

use crate::controllers::note::NoteController;

pub struct NoteRouter;

impl NoteRouter {
    pub fn new() -> Router {
        // TODO: include add_note_extension middleware
        let note_id_router: Router = Router::new()
            .route("/", get(NoteController::get_note))
            .route("/", put(NoteController::update_note))
            .route("/", delete(NoteController::delete_note));

        Router::new()
            .route("/", post(NoteController::create_note))
            .route("/", get(NoteController::get_notes))
            .nest("/{note_id}", note_id_router)
    }
}
