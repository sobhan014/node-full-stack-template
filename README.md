# Prerequisites
- Install Node v20
- Install MongoDB 7.0 ([docs](https://www.mongodb.com/docs/manual/administration/install-community/))

# Development
To run the app, first you need to run mongod. Please note that the path to the default config file might be different for you.
```
yarn run-db
or
mongod --config /usr/local/etc/mongod.conf --fork
```
Once the database is up and running, you can run the server by running
```
yarn
yarn dev:client
yarn dev:server
```
Or if you don't want to run the server in dev mode, you can run
```
yarn start:server
```
Note: As long as ESLint flat configs are experimental in VSCode, to have the errors show up in VSCode, you need to add this line to your VSCode settings:
```
"eslint.experimental.useFlatConfig": true,
```
or to get the full list of eslint errors/warnings in the repo, simply run
```
yarn eslint
```