use std::fmt::Display;

use sqlx::{Postgres, Transaction};

use crate::core::error::server_error_response::{ServerErrorResponse, ServerResult};

pub enum Table {
    Note,
    Notebook,
}

impl Display for Table {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Note => write!(f, "Note"),
            Self::Notebook => write!(f, "Notebook"),
        }
    }
}

pub struct QueryUtil;

impl QueryUtil {
    pub async fn verify_one_row_affected<'a>(
        rows_affected: u64,
        tx: Transaction<'a, Postgres>,
    ) -> ServerResult<Transaction<'a, Postgres>> {
        if rows_affected != 1 {
            tx.rollback().await?;

            let error_message = format!(
                "Query: {} rows affected but expected 1 row affected",
                rows_affected
            );

            return Err(ServerErrorResponse::new_internal_server_error(
                &error_message,
            ));
        }

        Ok(tx)
    }
}
