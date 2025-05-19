use super::{env::Env, server::Server};

pub type AppResult<T> = anyhow::Result<T>;

pub struct App;

impl App {
    pub fn new() -> Self {
        Self {}
    }

    pub async fn run(&self) -> AppResult<()> {
        let env = Env::new()?;
        let server = Server::new(env);

        server.start().await?;

        Ok(())
    }
}
