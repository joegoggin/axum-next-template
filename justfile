# server
server *args:
	cd server && cargo-watch -c -x "run -- {{args}}"

server-build:
	cd server && cargo-watch -c -x "build"

server-install *args:
	cd server && cargo add {{args}}

# database
db-migrate *args:
	cd server && sea-orm-cli migrate {{args}}

db-generate:
	cd server && sea-orm-cli generate entity -o entity/src  

db-push:
	just db-migrate up
	just db-generate 
