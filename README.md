# GraphQL Node.js API Example

This is an example of a GraphQL API in Node.js with Apollo Server, PostgreSQL and Heroku Connect.

## Installation

``` sh
npm install
```

## Configuration

Please set the following environment variables to run the application

* `DATABASE_URL` - PostgreSQL Connection String

## Setup Database

``` sh
npx sequelize db:migrate
npx sequelize db:seed:all
```

