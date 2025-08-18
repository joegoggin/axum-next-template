use std::fmt::{Debug, Display};

use axum::{Json, http::StatusCode, response::IntoResponse};
use log::error;
use serde_json::json;

use super::server_error::{ServerError, ServerErrors};

#[derive(Debug)]
pub struct ServerErrorResponse {
    pub status_code: StatusCode,
    pub errors: ServerErrors,
}

impl ServerErrorResponse {
    pub fn new(status_code: StatusCode, errors: ServerErrors) -> Self {
        Self {
            status_code,
            errors,
        }
    }

    pub fn new_with_message(status_code: StatusCode, message: impl Into<String>) -> Self {
        let errors: ServerErrors = vec![ServerError::new(None, &message.into())];

        Self {
            status_code,
            errors,
        }
    }

    pub fn new_with_single_error(status_code: StatusCode, error: ServerError) -> Self {
        let errors: ServerErrors = vec![error];

        Self {
            status_code,
            errors,
        }
    }

    pub fn new_internal_server_error<T>(error: T) -> Self
    where
        T: Display,
    {
        let mut errors = Vec::new();

        error!("Error: {}", error);

        errors.push(ServerError::new(None, "Something went wrong."));

        Self {
            status_code: StatusCode::INTERNAL_SERVER_ERROR,
            errors,
        }
    }
}

impl IntoResponse for ServerErrorResponse {
    fn into_response(self) -> axum::response::Response {
        let res_body = json!({
            "errors": self.errors
        });

        (self.status_code, Json(res_body)).into_response()
    }
}

impl From<sqlx::Error> for ServerErrorResponse {
    fn from(value: sqlx::Error) -> Self {
        match value {
            sqlx::Error::RowNotFound => {
                ServerErrorResponse::new_with_message(StatusCode::NOT_FOUND, "Resource not found.")
            }
            e => {
                let error_message = format!("SQLx: {e}");
                ServerErrorResponse::new_internal_server_error(error_message)
            }
        }
    }
}

impl From<uuid::Error> for ServerErrorResponse {
    fn from(value: uuid::Error) -> Self {
        let error_message = format!("Invalid UUID: {}", value);

        ServerErrorResponse::new_with_message(StatusCode::BAD_REQUEST, error_message)
    }
}

pub type ServerResult<T> = Result<T, ServerErrorResponse>;
