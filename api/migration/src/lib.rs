pub use sea_orm_migration::prelude::*;

pub mod schema;

mod m20220101_000001_create_note_table;
mod m20250520_001516_create_notebook_table;
mod m20250520_021659_alter_note;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20220101_000001_create_note_table::Migration),
            Box::new(m20250520_001516_create_notebook_table::Migration),
            Box::new(m20250520_021659_alter_note::Migration),
        ]
    }
}
