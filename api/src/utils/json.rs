use axum::http::StatusCode;
use lazy_regex::Regex;

use crate::{
    core::error::{server_error::ServerError, server_error_response::ServerErrorResponse},
    traits::capitalize::Capitalize,
};

use super::regex::RegexUtil;

pub struct JsonUtil;

impl JsonUtil {
    pub fn get_original_field_name(field_name: &str) -> String {
        match field_name {
            "first_name" => "fName".to_string(),
            "last_name" => "lName".to_string(),
            "refresh_token" => "refreshToken".to_string(),
            _ => field_name.to_string(),
        }
    }

    pub fn get_client_friendly_field_name(field_name: &str) -> String {
        match field_name {
            "firstName" => "first name".to_string(),
            "lastName" => "last name".to_string(),
            "refreshToken" => "refresh token".to_string(),
            "profilePic" => "profile picture".to_string(),
            _ => field_name.to_string(),
        }
    }

    pub fn handle_unknown_variant_error(error_message: &str) -> ServerErrorResponse {
        let field_name_re = Regex::new(r":(.*?):").unwrap();
        let variant_re = Regex::new(r"`(.*?)`").unwrap();

        let field_name = RegexUtil::get_first_capture(field_name_re, &error_message);

        let mut value = String::new();
        let mut variants = Vec::<String>::new();

        for (index, captures) in variant_re.captures_iter(&error_message).enumerate() {
            if index > 0 {
                let variant = &captures[1];
                variants.push(variant.to_string());
            } else {
                let capture = &captures[1];
                value = capture.to_string();
            }
        }

        let mut error_message = format!(
            "\"{}\" is not a valid {}. A {} must be on of the following values",
            value,
            Self::get_client_friendly_field_name(&field_name),
            Self::get_client_friendly_field_name(&field_name)
        );

        for (index, variant) in variants.iter().enumerate() {
            error_message = error_message + format!(" \"{}\"", variant).as_str();

            if index == variants.len() - 1 {
                error_message = error_message + ".";
            } else {
                error_message = error_message + ",";
            }
        }

        ServerErrorResponse::new_with_single_error(
            StatusCode::BAD_REQUEST,
            ServerError::new(Some(&field_name), &error_message),
        )
    }

    pub fn handle_missing_field_error(error_message: &str) -> ServerErrorResponse {
        let re = Regex::new(r"`(.*?)`").unwrap();

        let field_name = RegexUtil::get_first_capture(re, &error_message);

        let error_message = format!(
            "{} is required.",
            Self::get_client_friendly_field_name(&field_name).capitalize()
        );

        return ServerErrorResponse::new_with_single_error(
            StatusCode::BAD_REQUEST,
            ServerError::new(Some(&field_name), &error_message),
        );
    }

    pub fn handle_invalid_type_error(error_message: &str) -> ServerErrorResponse {
        println!("error_message: {}", error_message);

        let value_re = Regex::new(r"`(.*?)`").unwrap();
        let field_name_re = Regex::new(r":(.*?):").unwrap();
        let wrong_type_re = Regex::new(r"type:\s*(\w+)\s*`").unwrap();
        let right_type_re = Regex::new(r"a\s*(\w+)\s*at").unwrap();

        let value = RegexUtil::get_first_capture(value_re, &error_message);
        let field_name = RegexUtil::get_first_capture(field_name_re, &error_message);
        let wrong_type = RegexUtil::get_first_capture(wrong_type_re, &error_message);
        let right_type = RegexUtil::get_first_capture(right_type_re, &error_message);

        let message = format!(
            "{} is not a valid {}. {} is of type {}. The expected type for {} is {}.",
            value,
            Self::get_client_friendly_field_name(&field_name),
            value,
            wrong_type,
            Self::get_client_friendly_field_name(&field_name),
            right_type
        );

        ServerErrorResponse::new_with_single_error(
            StatusCode::BAD_REQUEST,
            ServerError::new(Some(&field_name), &message),
        )
    }
}
