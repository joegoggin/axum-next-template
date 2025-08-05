use serde::{Deserialize, Serialize};

use super::note::Notes;

#[derive(Serialize, Deserialize)]
pub struct Notebook {
    id: String,
    title: String,
    color: String,
    notes: Notes,
}

pub type Notebooks = Vec<Notebook>;

pub trait ToNotebooks {
    fn to_notebooks(&self) -> Notebooks;
}
