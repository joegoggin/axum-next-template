# setup 
setup:
	./scripts/setup.sh

env:
	./scripts/generate_env.sh

# client
client *args:
	cd client && yarn dev {{args}}

client-start *args:
	cd client && yarn start {{args}}

client-build *args:
	cd client && yarn build {{args}}

client-lint *args:
	cd client && yarn lint {{args}}

client-add *args:
	cd client && yarn add {{args}}

client-remove *args:
	cd client && yarn remove {{args}}

# api
api *args:
	cd api && cargo-watch -c -x "run -- {{args}}"

api-build:
	cd api && cargo-watch -c -x "build"

api-add *args:
	cd api && cargo add {{args}}

api-remove *args:
	cd api && cargo remove {{args}} 

# database
db-migrate *args:
	cd api && sqlx migrate {{args}}

# posting
posting:
	posting --collection ./.posting/collection --env ./.posting/.env
