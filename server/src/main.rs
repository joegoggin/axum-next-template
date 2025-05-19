use log::error;
use server::core::app::App;

#[tokio::main]
async fn main() {
    let app = App::new();

    let result = app.run().await;

    if let Err(error) = result {
        error!("Error: {}", error.to_string());
    }
}
