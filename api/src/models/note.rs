use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Note {
    pub id: String,
    pub title: String,
    pub content: String,
    pub color: String,
    pub notebook_id: String,
    pub created_at: DateTime<Utc>,
    pub modified_at: DateTime<Utc>,
}

pub type Notes = Vec<Note>;

pub trait ToNotes {
    fn to_notes(&self) -> Notes;
}
