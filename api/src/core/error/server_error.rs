use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct ServerError {
    pub field: Option<String>,
    pub message: String,
}

impl ServerError {
    pub fn new(field: Option<&str>, message: &str) -> Self {
        match field {
            Some(field) => Self {
                field: Some(field.into()),
                message: message.into(),
            },
            None => Self {
                field: None,
                message: message.into(),
            },
        }
    }
}

pub type ServerErrors = Vec<ServerError>;
