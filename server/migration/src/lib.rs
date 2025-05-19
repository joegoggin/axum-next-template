pub use sea_orm_migration::prelude::*;

pub mod schema;

mod m20220101_000001_create_note;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![Box::new(m20220101_000001_create_note::Migration)]
    }
}
