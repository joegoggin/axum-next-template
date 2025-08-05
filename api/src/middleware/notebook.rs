use axum::response::Response;

use crate::core::error::server_error_response::ServerResult;

pub struct NotebookMiddleware;

impl NotebookMiddleware {
    // TODO: add add_notebook_extension middleware
    pub async fn add_notebook_extension() -> ServerResult<Response> {
        todo!()
    }
}
