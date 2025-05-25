use sea_orm_migration::prelude::*;

use crate::schema::notebook::Notebook;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Notebook::Table)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(Notebook::Id)
                            .uuid()
                            .not_null()
                            .primary_key()
                            .default(Expr::cust("gen_random_uuid()")),
                    )
                    .col(ColumnDef::new(Notebook::Title).string().not_null())
                    .col(
                        ColumnDef::new(Notebook::Color)
                            .string()
                            .not_null()
                            .default("#2F82DB"),
                    )
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Notebook::Table).to_owned())
            .await?;

        Ok(())
    }
}
