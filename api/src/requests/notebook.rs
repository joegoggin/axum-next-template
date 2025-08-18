use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct CreateNotebookRequest {
    pub title: String,
    pub color: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct UpdateNotebookRequest {
    pub title: Option<String>,
    pub color: Option<String>,
}
