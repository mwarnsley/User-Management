// Import in the required modules
const express = require('express');
const expressGraphQL = require('express-graphql');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

// Normal variable, not imports
const app = express();

/*
 * Hooking up graphQL to express
 * Passing in the expressGraphQL to the use middleware for express
 * expressGraphQL takes in an object of options for configurations
 * schema is the exported schema from the schema file that we created
 * graphiql is set to true allowing for us to make queries against our development server (only for dev environment)
 */
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

// Using the static path for the client folder
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
