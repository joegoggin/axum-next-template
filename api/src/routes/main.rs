use axum::{
    Extension, Router,
    http::{HeaderName, Method},
    middleware,
};
use sqlx::{Pool, Postgres};
use tower_http::cors::{Any, CorsLayer};

use crate::core::logger::Logger;

use super::{note::NoteRouter, notebook::NotebookRouter};

pub struct MainRouter;

pub type DBExt = Extension<Pool<Postgres>>;

impl MainRouter {
    pub fn new(db: Pool<Postgres>) -> Router {
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
            .layer(Extension(db))
            .layer(cors)
            .layer(middleware::from_fn(Logger::log_request_and_response))
    }
}
