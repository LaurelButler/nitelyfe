# NiteLyfe

## Author:

Laurel Butler

## Live Application Link:

[Nitelyfe](https://laurelbutler-nitelyfe.now.sh/)

## API Documentation:

[Nitelyfe Server](https://github.com/LaurelButler/nitelyfe-server)

## Client Repo:

[Nitelyfe Client](https://github.com/LaurelButler/nitelyfe)

## Summary:

This website allows users in the service industry to find events around the city of Atlanta (expansion will happen) that host special deals such as discounted drinks or food. People can look at different days of the week and see events happening on those days. They can also add their own submissions of cool events catering to those in the service industry. 

The purpose of this website is to really bring a sense of community amongst those that spend their days catering to others. It will be a way to network, job hunt, socialize, and just de-stress in an environment that's safe amongst peers that understand you.

## Setup:

Clone or fork this repository and [the server repository](https://github.com/LaurelButler/nitelyfe-server). Run `npm install` on the client side and for the server you want to also run `npm install` in addition to creating the database named nitelyfe. You then want to create a .env file with the following information:

```PORT=8000
TZ='UTC'
MIGRATION_DB_HOST=127.0.0.1
MIGRATION_DB_PORT=5432
MIGRATION_DB_NAME=(database name here)
MIGRATION_DB_USER=(the username for your new database)
MIGRATION_DB_PASS=(password for your new database)
DB_URL="postgresql://(user):(password)@localhost/(database here)"
TEST_DB_URL="postgresql://(user):(password)@localhost/(test database here)"
JWT_SECRET="(whatever you want here)"
```

Now you will run `npm run migrate` to configure the database and `npm run migrate --NODE_ENV=test` to set up the test database. In the config.js file on the client side, you'll change the API_ENDPOINT to point to your local server. It by default is `http://localhost:3000`. You are good to go at this point and simply need to run `npm start` for the client and to start the nodemon, it's `npm run dev`.

## Technology Used

* React
* JavaScript
* Node.js
* PostgreSQL
* Jest




