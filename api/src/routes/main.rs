use axum::{
    Router,
    http::{HeaderName, Method},
    middleware,
};
use tower_http::cors::{Any, CorsLayer};

use crate::core::logger::Logger;

use super::{note::NoteRouter, notebook::NotebookRouter};

pub struct MainRouter;

impl MainRouter {
    pub fn new() -> Router {
        let cors = CorsLayer::new()
            .allow_methods([Method::POST, Method::GET, Method::PUT, Method::DELETE])
            .allow_origin(Any)
            .allow_headers([
                HeaderName::from_static("content-type"),
                HeaderName::from_static("authorization"),
            ]);

        Router::new()
            .nest("/note", NoteRouter::new())
            .nest("/notebook", NotebookRouter::new())
            // TODO: add database extension
            .layer(cors)
            .layer(middleware::from_fn(Logger::log_request_and_response))
    }
}
