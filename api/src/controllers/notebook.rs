use axum::Json;

use crate::{
    core::error::server_error_response::ServerResult,
    models::notebook::{Notebook, Notebooks},
    responses::{message::Message, notebook::NotebookWithMessageResponse},
};

pub struct NotebookController;

impl NotebookController {
    // TODO: add create_notebook controller
    pub async fn create_notebook() -> ServerResult<Json<NotebookWithMessageResponse>> {
        todo!()
    }

    // TODO: add get_notebooks controller
    pub async fn get_notebooks() -> ServerResult<Json<Notebooks>> {
        todo!()
    }

    // TODO: add get_notebook controller
    pub async fn get_notebook() -> ServerResult<Json<Notebook>> {
        todo!()
    }

    // TODO: add update_notebook controller
    pub async fn update_notebook() -> ServerResult<Json<NotebookWithMessageResponse>> {
        todo!()
    }

    // TODO: add delete_notebook controller
    pub async fn delete_notebook() -> ServerResult<Json<Message>> {
        todo!()
    }
}
