use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Serialize, Deserialize, Validate)]
pub struct CreateNotebookRequest {
    #[validate(length(min = 1))]
    pub title: String,
    pub color: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct UpdateNotebookRequest {
    pub title: Option<String>,
    pub color: Option<String>,
}
