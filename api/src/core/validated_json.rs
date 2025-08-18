use axum::{
    Json, RequestExt,
    extract::{FromRequest, Request, rejection::JsonRejection},
    http::StatusCode,
};
use log::error;
use serde::de::DeserializeOwned;
use validator::Validate;

use crate::{traits::capitalize::Capitalize, utils::json::JsonUtil};

use super::error::{server_error::ServerError, server_error_response::ServerErrorResponse};

pub struct ValidatedJson<T>(pub T);

impl<T, S> FromRequest<S> for ValidatedJson<T>
where
    T: DeserializeOwned + Validate + 'static,
    S: Send + Sync,
{
    type Rejection = ServerErrorResponse;

    async fn from_request(req: Request, _: &S) -> Result<Self, Self::Rejection> {
        let Json(data) = req
            .extract::<Json<T>, _>()
            .await
            .map_err(|error| match error {
                JsonRejection::JsonDataError(error) => {
                    let error_message = error.body_text();

                    if error_message.contains("invalid type") {
                        return JsonUtil::handle_invalid_type_error(&error_message);
                    }

                    if error_message.contains("unknown variant") {
                        return JsonUtil::handle_unknown_variant_error(&error_message);
                    };

                    if error_message.contains("missing field") {
                        return JsonUtil::handle_missing_field_error(&error_message);
                    }

                    ServerErrorResponse::new_with_message(
                        StatusCode::BAD_REQUEST,
                        "Failed to extract JSON.",
                    )
                }
                error => {
                    error!("{:#?}", error.body_text());
                    ServerErrorResponse::new_with_message(
                        StatusCode::BAD_REQUEST,
                        "Failed to extract JSON.",
                    )
                }
            })?;

        let data = match data.validate() {
            Ok(_) => data,
            Err(errors) => {
                let field_errors = errors.field_errors();
                let mut errors = Vec::new();

                for (key, values) in &field_errors {
                    let field_name = JsonUtil::get_original_field_name(key);
                    let code = &values[0].code;
                    let value = &values[0].params["value"];

                    let mut message = format!(
                        "{} is not a valid {}.",
                        value,
                        JsonUtil::get_client_friendly_field_name(&field_name).capitalize()
                    );

                    if key == &"email" && value == "" {
                        message = "Email is required.".to_string();
                    }

                    if code == "required" {
                        message = format!(
                            "{} is required.",
                            JsonUtil::get_client_friendly_field_name(&field_name).capitalize()
                        )
                    }

                    if code == "length" {
                        let min = &values[0].params["min"];

                        message = format!(
                            "{} must be at least {} character(s) long.",
                            JsonUtil::get_client_friendly_field_name(&field_name).capitalize(),
                            min
                        );

                        if min == 1 {
                            message = format!(
                                "{} is required.",
                                JsonUtil::get_client_friendly_field_name(&field_name).capitalize()
                            );
                        }
                    }

                    errors.push(ServerError::new(Some(&field_name), &message));
                }

                return Err(ServerErrorResponse::new(StatusCode::BAD_REQUEST, errors));
            }
        };

        Ok(Self(data))
    }
}
