use sea_orm_migration::sea_orm::DeriveIden;

#[derive(DeriveIden)]
pub enum Note {
    Table,
    Id,
    Title,
    Content,
    NotebookId,
}

#[derive(DeriveIden)]
pub enum NoteForeignKey {
    Notebook,
}
