use sea_orm_migration::prelude::*;

use crate::schema::{
    note::{Note, NoteForeignKey},
    notebook::Notebook,
};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Note::Table)
                    .add_column(ColumnDef::new(Note::NotebookId).uuid().not_null())
                    .add_foreign_key(
                        ForeignKey::create()
                            .name(NoteForeignKey::Notebook.to_string())
                            .from(Note::Table, Note::NotebookId)
                            .to(Notebook::Table, Notebook::Id)
                            .on_delete(ForeignKeyAction::SetNull)
                            .on_update(ForeignKeyAction::Cascade)
                            .get_foreign_key(),
                    )
                    .to_owned(),
            )
            .await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .alter_table(
                Table::alter()
                    .table(Note::Table)
                    .drop_foreign_key(NoteForeignKey::Notebook)
                    .drop_column(Note::NotebookId)
                    .to_owned(),
            )
            .await?;

        Ok(())
    }
}
