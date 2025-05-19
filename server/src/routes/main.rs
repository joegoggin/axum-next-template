use axum::{
    Extension, Router,
    http::{HeaderName, Method},
};
use sea_orm::DatabaseConnection;
use tower_http::cors::{Any, CorsLayer};

use super::note::NoteRouter;

pub struct MainRouter;

pub type DBExt = Extension<DatabaseConnection>;

impl MainRouter {
    pub fn new(db: DatabaseConnection) -> Router {
        let cors = CorsLayer::new()
            .allow_methods([Method::POST, Method::GET, Method::PUT, Method::DELETE])
            .allow_origin(Any)
            .allow_headers([
                HeaderName::from_static("content-type"),
                HeaderName::from_static("authorization"),
            ]);

        Router::new()
            .nest("/note", NoteRouter::new())
            .layer(Extension(db))
            .layer(cors)
    }
}
