use std::collections::{HashMap, hash_map::Entry};

use crate::core::error::server_error_response::ServerErrorResponse;

use super::note::{Note, Notes};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

#[derive(FromRow, Clone, Debug)]
pub struct NotebookRow {
    pub id: Uuid,
    pub title: String,
    pub color: String,
    pub created_at: DateTime<Utc>,
    pub modified_at: DateTime<Utc>,
}

#[derive(FromRow, Clone, Debug)]
pub struct NotebookWithNoteRow {
    pub notebook_id: Uuid,
    pub notebook_title: String,
    pub notebook_color: String,
    pub notebook_created_at: DateTime<Utc>,
    pub notebook_modified_at: DateTime<Utc>,
    pub note_id: Option<Uuid>,
    pub note_title: Option<String>,
    pub note_content: Option<String>,
    pub note_color: Option<String>,
    pub note_created_at: Option<DateTime<Utc>>,
    pub note_modified_at: Option<DateTime<Utc>>,
}

impl NotebookWithNoteRow {
    pub fn get_note(&self) -> Option<Note> {
        if let (
            Some(id),
            Some(title),
            Some(content),
            Some(color),
            Some(created_at),
            Some(modified_at),
        ) = (
            self.note_id,
            self.note_title.clone(),
            self.note_content.clone(),
            self.note_color.clone(),
            self.note_created_at,
            self.note_modified_at,
        ) {
            return Some(Note {
                id,
                title,
                content,
                color,
                notebook_id: self.notebook_id,
                created_at,
                modified_at,
            });
        }

        None
    }
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Notebook {
    pub id: Uuid,
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

impl From<NotebookWithNoteRow> for Notebook {
    fn from(value: NotebookWithNoteRow) -> Self {
        let mut notes: Notes = vec![];

        if let Some(note) = value.get_note() {
            notes.push(note);
        }

        Self {
            id: value.notebook_id,
            title: value.notebook_title,
            color: value.notebook_color,
            notes,
            created_at: value.notebook_created_at,
            modified_at: value.notebook_modified_at,
        }
    }
}

impl TryFrom<Vec<NotebookWithNoteRow>> for Notebook {
    type Error = ServerErrorResponse;

    fn try_from(rows: Vec<NotebookWithNoteRow>) -> Result<Self, Self::Error> {
        if rows.is_empty() {
            return Err(ServerErrorResponse::new_internal_server_error(
                "Failed to convert `Vec<NotebookWithNoteRow>` to `Notebook`.",
            ));
        }

        let mut notebook: Notebook = rows[0].clone().into();

        for row in rows.iter().skip(1) {
            if let Some(note) = row.get_note() {
                notebook.notes.push(note);
            }
        }

        Ok(notebook)
    }
}

pub type Notebooks = Vec<Notebook>;

pub trait ToNotebooks {
    fn to_notebooks(&self) -> Notebooks;
}

impl ToNotebooks for Vec<NotebookWithNoteRow> {
    fn to_notebooks(&self) -> Notebooks {
        let mut notebook_map: HashMap<Uuid, Notebook> = HashMap::new();

        for row in self {
            let notebook_id = row.notebook_id;

            match notebook_map.entry(notebook_id) {
                Entry::Occupied(mut entry) => {
                    let notebook = entry.get_mut();

                    if let Some(note) = row.get_note() {
                        notebook.notes.push(note);
                    };
                }
                Entry::Vacant(_) => {
                    notebook_map.insert(notebook_id, row.clone().into());
                }
            }
        }

        notebook_map.into_values().collect::<Notebooks>()
    }
}
