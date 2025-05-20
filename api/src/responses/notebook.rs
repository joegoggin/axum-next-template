use serde::{Deserialize, Serialize};

use crate::models::notebook::Notebook;

#[derive(Serialize, Deserialize)]
pub struct NotebookWithMessageResponse {
    pub notebook: Notebook,
    pub message: String,
}
