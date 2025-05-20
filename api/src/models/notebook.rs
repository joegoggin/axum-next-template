use entity::{note, notebook};
use serde::{Deserialize, Serialize};

use super::note::{Notes, ToNotes};

pub type NotebookModelWithRelations = (notebook::Model, Vec<note::Model>);

#[derive(Serialize, Deserialize)]
pub struct Notebook {
    id: String,
    title: String,
    notes: Notes,
}

impl Notebook {
    pub fn new(id: String, title: String) -> Self {
        Self {
            id,
            title,
            notes: vec![],
        }
    }
}

impl From<NotebookModelWithRelations> for Notebook {
    fn from(value: (notebook::Model, Vec<note::Model>)) -> Self {
        Self {
            id: value.0.id.into(),
            title: value.0.title.to_string(),
            notes: value.1.to_notes(),
        }
    }
}

pub type Notebooks = Vec<Notebook>;

pub trait ToNotebooks {
    fn to_notebooks(&self) -> Notebooks;
}

impl ToNotebooks for Vec<NotebookModelWithRelations> {
    fn to_notebooks(&self) -> Notebooks {
        let mut notebooks: Notebooks = vec![];

        for model in self {
            notebooks.push(model.clone().into())
        }

        notebooks
    }
}
