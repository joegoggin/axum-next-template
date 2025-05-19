use axum::{Router, middleware::from_fn, routing::get};

use crate::{controllers::note::NoteController, middleware::note::NoteMiddleware};

pub struct NoteRouter;

impl NoteRouter {
    pub fn new() -> Router {
        let note_id_router: Router = Router::new()
            .route(
                "/",
                get(NoteController::get_note)
                    .put(NoteController::update_note)
                    .delete(NoteController::delete_note),
            )
            .layer(from_fn(NoteMiddleware::add_note_extension));

        Router::new()
            .route(
                "/",
                get(NoteController::get_notes).post(NoteController::create_note),
            )
            .nest("/{note_id}", note_id_router)
    }
}
