use super::note::Notes;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

#[derive(FromRow)]
pub struct NotebookRow {
    pub id: String,
    pub title: String,
    pub color: String,
    pub created_at: DateTime<Utc>,
    pub modified_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize)]
pub struct Notebook {
    pub id: String,
    pub title: String,
    pub color: String,
    pub notes: Notes,
    pub created_at: DateTime<Utc>,
    pub modified_at: DateTime<Utc>,
}

impl From<NotebookRow> for Notebook {
    fn from(value: NotebookRow) -> Self {
        Self {
            id: value.id,
            title: value.title,
            color: value.color,
            notes: vec![],
            created_at: value.created_at,
            modified_at: value.modified_at,
        }
    }
}

pub type Notebooks = Vec<Notebook>;
