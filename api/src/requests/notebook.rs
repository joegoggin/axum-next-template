use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct CreateNotebookRequest {
    pub title: String,
}

#[derive(Serialize, Deserialize)]
pub struct UpdateNotebookRequest {
    pub title: Option<String>,
}
