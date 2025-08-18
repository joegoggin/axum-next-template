source ./scripts/generate_env.sh

docker compose up -d

sleep 1

docker exec -e PGPASSWORD="$PASSWORD" axum-next-template_postgres psql -U postgres -d postgres -f "/tmp/init.sql"

just db-migrate run
cd client && yarn
