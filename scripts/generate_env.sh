read -r -p "Enter your pgadmin email: " EMAIL
read -r -sp "Enter your postgres password: " PASSWORD
echo

# API
rm -rf ./api/.env

echo "DATABASE_URL=\"postgresql://postgres:$PASSWORD@localhost:5432/axum-next-template\"" >>./api/.env
echo "APP_ENV=\"dev\"" >>./api/.env

# Client
rm -rf ./client/.env

echo "NEXT_PUBLIC_API_URL=\"http://localhost:8000\"" >>./client/.env

# Docker
rm -rf ./docker/env
mkdir ./docker/env

{
	echo "POSTGRES_USER=\"postgres\""
	echo "POSTGRES_PASSWORD=\"$PASSWORD\""
} >>./docker/env/postgres.env

{
	echo "PGADMIN_DEFAULT_EMAIL=\"$EMAIL\""
	echo "PGADMIN_DEFAULT_PASSWORD=\"$PASSWORD\""
	echo "PGADMIN_CONFIG_SERVER_MODE=\"False\""
} >>./docker/env/pgadmin.env

# Posting
rm -rf ./.posting/.env

echo "API_URL=\"http://localhost:8000\"" >>./.posting/.env
