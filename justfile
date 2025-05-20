# client
client *args:
	cd client && yarn dev {{args}}

client-start *args:
	cd client && yarn start {{args}}

client-build *args:
	cd client && yarn build {{args}}

client-lint *args:
	cd client && yarn lint {{args}}

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
	cd api && sea-orm-cli migrate {{args}}

db-generate:
	cd api && sea-orm-cli generate entity -o entity/src  

db-push:
	just db-migrate up
	just db-generate 
