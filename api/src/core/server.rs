use anyhow::Error;
use axum::serve;
use tokio::net::TcpListener;

use crate::{routes::main::MainRouter, utils::terminal_command::TerminalCommand};

use super::{app::AppResult, env::Env, logger::Logger};

pub struct Server {
    env: Env,
}

impl Server {
    pub fn new(env: Env) -> Self {
        Self { env }
    }

    pub async fn start(&self) -> AppResult<()> {
        self.start_docker().await?;
        self.create_database().await?;
        self.start_server().await?;

        Ok(())
    }

    async fn start_docker(&self) -> AppResult<()> {
        if self.env.is_dev_mode() {
            Logger::log_message("Starting Docker");

            TerminalCommand::new("docker compose up -d").run().await?;
            TerminalCommand::new("sleep 1").run().await?;

            Logger::log_success("Successfully Started Docker");
        }

        Ok(())
    }

    async fn create_database(&self) -> AppResult<()> {
        if self.env.is_dev_mode() {
            let result = TerminalCommand::new(
                "docker exec -i axum-next-template_postgres psql -U postgres -d postgres -f /tmp/list.sql"
            )
            .run_with_output()
            .await
            .map_err(|e| Error::msg(format!("Failed to list databases: {}", e)))?;

            if !result.contains("axum-next-template") {
                Logger::log_message("Creating Database");

                TerminalCommand::new("docker exec -i axum-next-template_postgres psql -U postgres -d postgres -f /tmp/init.sql")
                    .run()
                    .await
                    .map_err(|e| Error::msg(format!("Failed to initialize database: {}", e)))?;

                Logger::log_success("Successfully Created Database");
            }
        }

        Ok(())
    }

    async fn start_server(&self) -> AppResult<()> {
        Logger::log_success("Server Running On Port 8000");

        let db = sqlx::postgres::PgPoolOptions::new()
            .max_connections(10)
            .acquire_timeout(std::time::Duration::from_secs(15))
            .connect(&self.env.database_url)
            .await?;

        sqlx::migrate!().run(&db).await?;

        let listener = TcpListener::bind("0.0.0.0:8000").await?;
        let router = MainRouter::new(db);

        serve(listener, router).await?;

        Ok(())
    }
}
