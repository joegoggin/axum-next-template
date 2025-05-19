use std::fmt::Debug;

use axum::{Json, http::StatusCode, response::IntoResponse};
use colorized::{Colors, colorize_println};
use sea_orm::DbErr;
use serde_json::json;

use crate::utils::sea_orm::{NoReqBody, handle_sea_orm_error};

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
        T: Debug,
    {
        let mut errors = Vec::new();

        colorize_println(format!("Error: {:#?}", error), Colors::RedFg);

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

impl From<DbErr> for ServerErrorResponse {
    fn from(value: DbErr) -> Self {
        handle_sea_orm_error(value, &NoReqBody)
    }
}

pub type ServerResult<T> = Result<T, ServerErrorResponse>;
