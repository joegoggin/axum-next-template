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
            .await?;

            if !result.contains("axum-next-template") {
                Logger::log_message("Createing Database");

                TerminalCommand::new("docker exec -i axum-next-template_postgres psql -U postgres -d postgres -f /tmp/init.sql")
                    .run()
                    .await?;

                Logger::log_success("Successfully Created Database");
            }
        }

        Ok(())
    }

    async fn start_server(&self) -> AppResult<()> {
        Logger::log_success("Server running on port 8000");

        let listener = TcpListener::bind("0.0.0.0:8000").await?;
        // TODO: handle database connection in start_server
        let rotuer = MainRouter::new();

        serve(listener, rotuer).await?;

        Ok(())
    }
}
