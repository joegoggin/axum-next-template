use lazy_regex::Regex;

pub struct RegexUtil;

impl RegexUtil {
    pub fn get_first_capture(regex: Regex, str: &str) -> String {
        let mut first_capture_string = String::new();

        if let Some(captures) = regex.captures(str) {
            let capture = &captures[1];
            first_capture_string = capture.to_string().trim().to_string();
        }

        first_capture_string
    }
}
