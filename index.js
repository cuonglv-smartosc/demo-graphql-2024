const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');
require('dotenv').config();

const app = express();

const schema = makeExecutableSchema({
  typeDefs: loadFilesSync(path.join(__dirname, '**/**/*.graphql')),
  resolvers: loadFilesSync(path.join(__dirname, '**/**/*.resolver.js')),
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Running server graphql on port ${PORT}`);
});
