use axum::{Extension, Json};
use entity::{note, notebook};
use sea_orm::{ActiveModelTrait, ActiveValue::Set, EntityTrait};

use crate::{
    core::error::server_error_response::ServerResult,
    middleware::notebook::NotebookModelExt,
    models::notebook::{Notebook, Notebooks, ToNotebooks},
    requests::{note::UpdateNoteRequest, notebook::CreateNotebookRequest},
    responses::{message::Message, notebook::NotebookWithMessageResponse},
    routes::main::DBExt,
};

pub struct NotebookController;

impl NotebookController {
    pub async fn create_notebook(
        Extension(db): DBExt,
        Json(req_body): Json<CreateNotebookRequest>,
    ) -> ServerResult<Json<NotebookWithMessageResponse>> {
        let active_model = notebook::ActiveModel {
            title: Set(req_body.title.to_string()),
            ..Default::default()
        };

        let model = notebook::Entity::insert(active_model)
            .exec_with_returning(&db)
            .await?;

        let respone = NotebookWithMessageResponse {
            notebook: (model, vec![]).into(),
            message: "Successfully created notebook.".to_string(),
        };

        Ok(Json(respone))
    }

    pub async fn get_notebooks(Extension(db): DBExt) -> ServerResult<Json<Notebooks>> {
        let notebooks: Notebooks = notebook::Entity::find()
            .find_with_related(entity::note::Entity)
            .all(&db)
            .await?
            .to_notebooks();

        Ok(Json(notebooks))
    }

    pub async fn get_notebook(
        Extension(notebook_model): NotebookModelExt,
    ) -> ServerResult<Json<Notebook>> {
        let notebook: Notebook = notebook_model.into();

        Ok(Json(notebook))
    }

    pub async fn update_notebook(
        Extension(db): DBExt,
        Extension(notebook_model): NotebookModelExt,
        Json(req_body): Json<UpdateNoteRequest>,
    ) -> ServerResult<Json<NotebookWithMessageResponse>> {
        let mut active_model: notebook::ActiveModel = notebook_model.0.into();

        if let Some(title) = req_body.title {
            active_model.title = Set(title)
        }

        let updated_model = active_model.update(&db).await?;

        let response = NotebookWithMessageResponse {
            notebook: (updated_model, notebook_model.1).into(),
            message: "Notebook successfully updated.".to_string(),
        };

        Ok(Json(response))
    }

    pub async fn delete_notebook(
        Extension(db): DBExt,
        Extension(notebook_model): NotebookModelExt,
    ) -> ServerResult<Json<Message>> {
        for model in notebook_model.1 {
            note::Entity::delete_by_id(model.id).exec(&db).await?;
        }

        notebook::Entity::delete_by_id(notebook_model.0.id)
            .exec(&db)
            .await?;

        let response = Message {
            message: "Notebook successfully deleted.".to_string(),
        };

        Ok(Json(response))
    }
}
