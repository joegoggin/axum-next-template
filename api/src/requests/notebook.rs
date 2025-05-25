use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct CreateNotebookRequest {
    pub title: String,
    pub color: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct UpdateNotebookRequest {
    pub title: Option<String>,
    pub color: Option<String>,
}
