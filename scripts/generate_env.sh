read -r -p "Enter your pgadmin email: " EMAIL
read -r -sp "Enter your postgres password: " PASSWORD
echo

if [ ! -f ./api/.env ]; then
    echo "DATABASE_URL=\"postgresql://postgres:$PASSWORD@localhost:5432/axum-next-template\"" >>./api/.env
fi

if [ ! -f ./client/.env ]; then
    echo "NEXT_PUBLIC_API_URL=\"http://localhost:8000\"" >>./client/.env
fi

if [ ! -f ./env/postgres.env ]; then
    echo "POSTGRES_USER=\"postgres\"" >>./docker/postgres/postgres.env
    echo "POSTGRES_PASSWORD=\"$PASSWORD\"" >>./docker/postgres/postgres.env
fi

if [ ! -f ./env/pgadmin.env ]; then
    echo "PGADMIN_DEFAULT_EMAIL=\"$EMAIL\"" >>./docker/pgadmin/pgadmin.env
    echo "PGADMIN_DEFAULT_PASSWORD=\"$PASSWORD\"" >>./docker/pgadmin/pgadmin.env
    echo "PGADMIN_CONFIG_SERVER_MODE=\"False\"" >>./docker/pgadmin/pgadmin.env
fi
