use sea_orm_migration::sea_orm::DeriveIden;

#[derive(DeriveIden)]
pub enum Notebook {
    Table,
    Id,
    Title,
    Notes,
}
