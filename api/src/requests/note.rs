use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Serialize, Deserialize, Validate)]
pub struct CreateNoteRequest {
    #[validate(length(min = 1))]
    pub title: String,
    #[validate(length(min = 1))]
    pub content: String,
// File: api/src/controllers/note.rs

pub async fn create_note(
    Extension(db): DBExt,
    ValidatedJson(req_body): ValidatedJson<CreateNoteRequest>,
) -> ServerResult<Json<NoteWithMessageResponse>> {
    let mut tx = db.begin().await?;
    const DEFAULT_COLOR: &str = "#4b98ff";
    let color = req_body.color.unwrap_or_else(|| DEFAULT_COLOR.to_string());
    // … validate notebook exists …
    let note = query_as!(
        Note,
        r#"
        INSERT INTO Note (title, content, color, notebook_id)
        VALUES ($1, $2, $3, $4)
        RETURNING id, title, content, color, notebook_id, created_at, modified_at
        "#,
        req_body.title,
        req_body.content,
        color,
        req_body.notebook_id
    )
    .fetch_one(&mut *tx)
    // … rest of the function …
}

#[derive(Serialize, Deserialize)]
pub struct UpdateNoteRequest {
    pub title: Option<String>,
    pub content: Option<String>,
    pub color: Option<String>,
    #[serde(rename = "notebookId")]
    pub notebook_id: Option<Uuid>,
}
