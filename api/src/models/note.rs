use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Note {
    pub id: String,
    pub title: String,
    pub content: String,
    pub color: String,
    pub notebook_id: String,
}

pub type Notes = Vec<Note>;

pub trait ToNotes {
    fn to_notes(&self) -> Notes;
}
