use entity::note;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
pub struct Note {
    pub id: String,
    pub title: String,
    pub content: String,
    pub color: String,
    pub notebook_id: Uuid,
}

impl From<note::Model> for Note {
    fn from(value: note::Model) -> Self {
        Self {
            id: value.id.into(),
            title: value.title.to_string(),
            content: value.content.to_string(),
            color: value.color.to_string(),
            notebook_id: value.notebook_id.to_owned(),
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
