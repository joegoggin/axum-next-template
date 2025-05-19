pub trait Capitalize {
    fn capitalize(self) -> String;
}

impl<T: Into<String>> Capitalize for T {
    fn capitalize(self) -> String {
        let mut capitalized = String::new();

        let s = self.into();

        if let Some(first_char) = s.chars().next() {
            capitalized.push_str(&first_char.to_uppercase().collect::<String>());
            capitalized.push_str(&s[1..]);
        } else {
            capitalized.push_str(&s);
        }

        capitalized
    }
}
