use axum::http::StatusCode;
use log::error;
use sea_orm::{DbErr, RuntimeErr, SqlxError, sqlx::error::DatabaseError};

use crate::{
    core::error::{server_error::ServerError, server_error_response::ServerErrorResponse},
    traits::{capitalize::Capitalize, field_accessor::FieldAccessor},
};

pub struct NoReqBody;

impl FieldAccessor for NoReqBody {
    fn get_value(&self, _: &str) -> Option<serde_json::Value> {
        None
    }
}

pub fn handle_sea_orm_error<T>(error: DbErr, req_body: &T) -> ServerErrorResponse
where
    T: FieldAccessor,
{
    match error {
        DbErr::Conn(error) => handle_connection_error(error),
        DbErr::Query(error) => handler_query_error(error, req_body),
        _ => ServerErrorResponse::new_internal_server_error(error),
    }
}

fn handle_connection_error(error: RuntimeErr) -> ServerErrorResponse {
    error!("{:#?}", error);
    return ServerErrorResponse::new_with_message(
        StatusCode::INTERNAL_SERVER_ERROR,
        "Failed to connect to database",
    );
}

fn handler_query_error<T>(error: RuntimeErr, req_body: &T) -> ServerErrorResponse
where
    T: FieldAccessor,
{
    match error {
        RuntimeErr::SqlxError(error) => match error {
            SqlxError::Database(error) => {
                if let Some(code) = error.code() {
                    match code.as_ref() {
                        "23505" => return handle_unique_constranit_error(error, req_body),
                        _ => {
                            error!("{:#?}", error);

                            return ServerErrorResponse::new_with_message(
                                StatusCode::BAD_REQUEST,
                                "Database Error",
                            );
                        }
                    }
                }

                error!("{:#?}", error);

                return ServerErrorResponse::new_with_message(
                    StatusCode::BAD_REQUEST,
                    "Database Error",
                );
            }
            _ => {
                error!("{:#?}", error);

                return ServerErrorResponse::new_with_message(
                    StatusCode::BAD_REQUEST,
                    "SQlx Error",
                );
            }
        },
        _ => {
            error!("{:#?}", error);

            return ServerErrorResponse::new_with_message(StatusCode::BAD_REQUEST, "Query Error");
        }
    }
}

fn handle_unique_constranit_error<T>(
    error: Box<dyn DatabaseError>,
    req_body: &T,
) -> ServerErrorResponse
where
    T: FieldAccessor,
{
    let mut message: String = "Unique constraint violation.".to_string();

    if let Some(constraint) = error.constraint() {
        let parts: Vec<&str> = constraint.split('_').collect();
        let model = parts[0].capitalize();
        let field = parts[1];

        if let Some(value) = req_body.get_value(field) {
            message = format!("{} with {} of {} already exists.", model, field, value)
        }

        return ServerErrorResponse::new_with_single_error(
            StatusCode::BAD_REQUEST,
            ServerError::new(Some(field), &message),
        );
    } else {
        error!("{:#?}", error);
    }

    return ServerErrorResponse::new_with_message(StatusCode::BAD_REQUEST, &message);
}
