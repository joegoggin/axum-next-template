use axum::{
    Extension,
    extract::{Path, Request},
    http::StatusCode,
    middleware::Next,
    response::{IntoResponse, Response},
};
use entity::{note, notebook};
use sea_orm::{EntityTrait, ModelTrait};
use uuid::Uuid;

use crate::{
    core::error::server_error_response::{ServerErrorResponse, ServerResult},
    models::notebook::NotebookModelWithRelations,
    routes::main::DBExt,
};

pub type NotebookModelExt = Extension<NotebookModelWithRelations>;

pub struct NotebookMiddleware;

impl NotebookMiddleware {
    pub async fn add_notebook_extension(
        Extension(db): DBExt,
        Path(notebook_id): Path<Uuid>,
        mut req: Request,
        next: Next,
    ) -> ServerResult<Response> {
        let model = notebook::Entity::find_by_id(notebook_id).one(&db).await?;

        match model {
            Some(model) => {
                let related_models = model.find_related(note::Entity).all(&db).await?;

                req.extensions_mut().insert((model, related_models));
            }
            None => {
                let message = format!("Notebook with id of {} not found.", notebook_id);

                return Err(ServerErrorResponse::new_with_message(
                    StatusCode::NOT_FOUND,
                    &message,
                ));
            }
        }

        Ok(next.run(req).await.into_response())
    }
}
