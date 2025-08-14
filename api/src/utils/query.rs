use sqlx::{Postgres, Transaction};

use crate::core::error::server_error_response::{ServerErrorResponse, ServerResult};

pub enum Table {
    Note,
    Notebook,
}

impl ToString for Table {
    fn to_string(&self) -> String {
        match self {
            Self::Note => "Note".to_string(),
            Self::Notebook => "Notebook".to_string(),
        }
    }
}

pub struct QueryUtil;

impl QueryUtil {
    pub async fn verify_one_row_effected<'a>(
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
