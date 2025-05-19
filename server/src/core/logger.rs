use axum::http::{HeaderMap, Method, StatusCode};
use colorized::{Colors, colorize_print, colorize_println};
use log::{Level, LevelFilter, Log, Metadata, Record, set_boxed_logger, set_max_level};
use serde_json::{Value, json};

use crate::traits::capitalize::Capitalize;

use super::error::server_error_response::ServerErrorResponse;

pub struct Logger;

impl Logger {
    fn get_hashtags(level: i8) -> String {
        let mut hashtags = String::new();

        for _ in 0..level {
            hashtags = hashtags + "#";
        }
        hashtags
    }

    fn get_spaces(level: i8) -> String {
        let mut spaces = String::new();

        for _ in 0..level {
            spaces = spaces + "  ";
        }
        spaces
    }

    fn log_header(header: &str, hashtags: &str) {
        let header_string = format!("\n{} {} {}\n", hashtags, header.capitalize(), hashtags);
        colorize_println(header_string, Colors::MagentaFg);
    }

    pub fn log_error(record: &Record) {
        let hashtags = Self::get_hashtags(6);
        let error_header = format!("\n{} Error {}\n", hashtags, hashtags);
        let file_path = Self::extract_after_src(record.file());
        let line_number = match record.line() {
            Some(line) => line.to_string(),
            None => "".to_string(),
        };

        colorize_println(error_header, Colors::RedFg);
        colorize_println(
            format!("File: {}\nLine Number: {}\n", file_path, line_number),
            Colors::RedFg,
        );
        colorize_println(format!("{:#}", record.args()), Colors::RedFg);
    }

    pub fn log_debug(record: &Record) {
        let hashtags = Self::get_hashtags(6);
        let error_header = format!("\n{} Debug {}\n", hashtags, hashtags);
        let file_path = Self::extract_after_src(record.file());
        let line_number = match record.line() {
            Some(line) => line.to_string(),
            None => "".to_string(),
        };

        colorize_println(error_header, Colors::YellowFg);
        colorize_println(
            format!("File: {}\nLine Number: {}\n", file_path, line_number),
            Colors::YellowFg,
        );
        colorize_println(format!("{:#}", record.args()), Colors::YellowFg);
    }

    pub fn log_success(message: &str) {
        let hashtags = Self::get_hashtags(6);
        let message = format!("\n{} {} {}\n", hashtags, message, hashtags);
        colorize_println(message, Colors::GreenFg);
    }

    pub fn log_message(message: &str) {
        let hashtags = Self::get_hashtags(6);
        let message = format!("\n{} {} {}\n", hashtags, message, hashtags);
        colorize_println(message, Colors::BlueFg);
    }

    fn log_h1(header: &str) {
        Self::log_header(header, &Self::get_hashtags(6));
    }

    fn log_h2(header: &str) {
        Self::log_header(header, &Self::get_hashtags(5));
    }

    fn log_array(values: Vec<Value>, level: i8) {
        if values.len() == 0 {
            println!("[],");
        } else {
            if level > 0 {
                print!("\n{}", Self::get_spaces(level))
            }
            println!("[");

            for (index, value) in values.iter().enumerate() {
                print!("{}", Self::get_spaces(level + 1));
                println!("{{");
                Self::log_json(value.to_owned(), level + 2);
                print!("{}", Self::get_spaces(level + 1));

                if index == values.len() - 1 {
                    println!("}}");
                } else {
                    println!("}},");
                }
            }

            if level > 0 {
                print!("{}", Self::get_spaces(level));
            }

            if level == 0 {
                println!("]");
            } else {
                println!("],");
            }
        }
    }

    fn log_json(json: Value, level: i8) {
        match json {
            Value::Array(values) => {
                Self::log_array(values, level);
            }
            json => {
                if let Some(json_object) = json.as_object() {
                    if level == 0 {
                        println!("{{");
                    }
                    for (key, value) in json_object {
                        print!("{}", Self::get_spaces(level + 1));
                        colorize_print(key, Colors::CyanFg);
                        print!(": ");

                        match value {
                            Value::Array(values) => Self::log_array(values.clone(), level + 1),
                            Value::String(value) => {
                                if key == "password" || key == "confirm" {
                                    colorize_print(format!("{}", "(hidden)"), Colors::BlueFg)
                                } else {
                                    colorize_print(format!("\"{}\"", value), Colors::GreenFg)
                                }
                                println!(",");
                            }
                            Value::Object(value) => {
                                println!("{{");
                                Self::log_json(json!(value), level + 2);
                                print!("{}", Self::get_spaces(level + 1));
                                println!("}},");
                            }
                            value => {
                                colorize_print(value.to_string(), Colors::MagentaFg);
                                println!(",");
                            }
                        }
                    }
                    if level == 0 {
                        println!("}}");
                    }
                }
            }
        }
    }

    fn log_headers(headers: &HeaderMap) {
        for (key, value) in headers.iter() {
            colorize_print(key.to_string() + ": ", Colors::CyanFg);

            let value = value.to_str().unwrap_or("");
            println!("{}", value);
        }
    }

    pub fn log_server_error_response(res: &ServerErrorResponse) {
        Self::log_h1("response");

        colorize_print("Status Code: ", Colors::CyanFg);
        colorize_print(res.status_code.to_string() + "\n", Colors::MagentaFg);

        for error in &res.errors {
            let error_message = format!("\nError: {}", error.message);

            colorize_println(error_message, Colors::RedFg);
        }
    }

    pub fn log_request(method: &Method, route: &str, headers: &HeaderMap, req_body: Option<Value>) {
        Self::log_h1("Request");
        colorize_print(method.to_string() + " ", Colors::CyanFg);
        println!("{}", route);

        Self::log_h2("Headers");
        Self::log_headers(headers);

        if let Some(req_body) = req_body {
            Self::log_h2("Body");
            Self::log_json(req_body, 0);
        }
    }

    pub fn log_response(res_body: Option<Value>) {
        Self::log_h1("Response");

        colorize_print("Status Code: ", Colors::CyanFg);
        colorize_println(format!("{}", StatusCode::OK), Colors::GreenFg);

        if let Some(res_body) = res_body {
            Self::log_h2("Body");
            Self::log_json(res_body, 0);
        }
    }

    pub fn setup_logging() {
        let logger = Logger;

        let _ = set_boxed_logger(Box::new(logger))
            .map_err(|error| colorize_println(format!("Error: {:#?}", error), Colors::RedFg));
        set_max_level(LevelFilter::Debug);
    }

    pub fn extract_after_src(path: Option<&str>) -> String {
        match path {
            Some(path) => {
                let src_prefix = "src/";

                if let Some(start_index) = path.find(src_prefix) {
                    let start_index = start_index + src_prefix.len();

                    path[start_index..].to_string()
                } else {
                    "".to_string()
                }
            }
            None => "".to_string(),
        }
    }
}

impl Log for Logger {
    fn enabled(&self, _: &Metadata) -> bool {
        true
    }

    fn log(&self, record: &Record) {
        if self.enabled(record.metadata()) {
            let blue = "\x1b[34m";
            let purple = "\x1b[35m";
            let clear = "\x1b[0m";
            let file_path = Self::extract_after_src(record.file());
            let line_number = match record.line() {
                Some(line) => line.to_string(),
                None => "".to_string(),
            };

            if file_path.contains("index.crates") {
                return;
            };

            match record.level() {
                Level::Info => println!("\n{}{}{}", blue, record.args(), clear),
                Level::Error => Self::log_error(record),
                Level::Debug => Self::log_debug(record),
                _ => println!(
                    "\n{}File: {}{}\n{}Line Number: {}{}\n{}",
                    purple,
                    clear,
                    file_path,
                    purple,
                    clear,
                    line_number,
                    record.args(),
                ),
            }
        }
    }

    fn flush(&self) {}
}
