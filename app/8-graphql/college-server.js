const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
// const {makeExecutableSchema} = require('graphql-tools')
const {buildSchema} = require('graphql')
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express')
const fs = require('fs')
// const db = require('./db');

// --------1. Build GraphQL Schema--------
const typeDefs = fs.readFileSync('./schema.graphql', {encoding: 'utf-8'})
const resolvers = require('./graphql/college-resolvers')
let typesNresolvers = {typeDefs, resolvers}
// const schema = makeExecutableSchema(typesNresolvers)
const schema = buildSchema({typeDefs, resolvers})

// --------2. Express middleware--------
const port = process.env.PORT || 9000;
const app = express();
app.use(cors(), bodyParser.json());
app.use('/graphql', graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

app.listen(port, () => console.info(`Server started on port ${port}`))
