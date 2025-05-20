use dotenv::dotenv;
use std::env;

use super::app::AppResult;

#[derive(Debug)]
pub struct Env {
    pub database_url: String,
}

impl Env {
    pub fn new() -> AppResult<Self> {
        dotenv().ok();

        let database_url = env::var("DATABASE_URL")?;

        Ok(Self { database_url })
    }
}
