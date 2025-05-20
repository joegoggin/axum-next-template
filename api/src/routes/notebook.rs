use axum::{
    Router, middleware,
    routing::{delete, get, post, put},
};

use crate::{controllers::notebook::NotebookController, middleware::notebook::NotebookMiddleware};

pub struct NotebookRouter;

impl NotebookRouter {
    pub fn new() -> Router {
        let notebook_id_router: Router = Router::new()
            .route("/", get(NotebookController::get_notebook))
            .route("/", put(NotebookController::update_notebook))
            .route("/", delete(NotebookController::delete_notebook))
            .layer(middleware::from_fn(
                NotebookMiddleware::add_notebook_extension,
            ));

        Router::new()
            .route("/", post(NotebookController::create_notebook))
            .route("/", get(NotebookController::get_notebooks))
            .nest("/{notebook_id}", notebook_id_router)
    }
}
