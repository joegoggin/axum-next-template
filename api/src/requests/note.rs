use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Serialize, Deserialize, Validate)]
pub struct CreateNoteRequest {
    #[validate(length(min = 1))]
    pub title: String,
    #[validate(length(min = 1))]
    pub content: String,
    pub color: Option<String>,
    #[serde(rename = "notebookId")]
    pub notebook_id: Uuid,
}

#[derive(Serialize, Deserialize)]
pub struct UpdateNoteRequest {
    pub title: Option<String>,
    pub content: Option<String>,
    pub color: Option<String>,
    #[serde(rename = "notebookId")]
    pub notebook_id: Option<Uuid>,
}
