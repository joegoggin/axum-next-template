use entity::note;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Note {
    pub id: String,
    pub title: String,
    pub content: String,
}

impl Note {
    pub fn new(id: String, title: String, content: String) -> Self {
        Self { id, title, content }
    }
}

impl From<note::Model> for Note {
    fn from(value: note::Model) -> Self {
        Self {
            id: value.id.into(),
            title: value.title.to_string(),
            content: value.contnet.to_string(),
        }
    }
}

pub type Notes = Vec<Note>;

pub trait ToNotes {
    fn to_notes(&self) -> Notes;
}

impl ToNotes for Vec<note::Model> {
    fn to_notes(&self) -> Notes {
        let mut notes: Notes = vec![];

        for model in self {
            notes.push(model.clone().into())
        }

        notes
    }
}
