use axum::serve;
use sea_orm::Database;
use tokio::net::TcpListener;

use crate::routes::main::MainRouter;

use super::{app::AppResult, env::Env};

pub struct Server {
    env: Env,
}

impl Server {
    pub fn new(env: Env) -> Self {
        Self { env }
    }

    pub async fn start(&self) -> AppResult<()> {
        println!("Server running on port 8000");

        let listener = TcpListener::bind("0.0.0.0:8000").await?;
        let db = Database::connect(self.env.database_url.clone()).await?;
        let rotuer = MainRouter::new(db);

        serve(listener, rotuer).await?;

        Ok(())
    }
}
