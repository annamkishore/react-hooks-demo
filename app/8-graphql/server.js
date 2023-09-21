const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {mergeTypeDefs} = require('@graphql-tools/merge');
const {loadFilesSync} = require('@graphql-tools/load-files');
const path = require('path');
const resolvers = require('./graphql/resolvers');

async function startApollo() {
    // Load and merge type definitions from GraphQL files
    const typesArray = loadFilesSync(path.join(__dirname, './graphql'), {extensions: ['graphql']});
    const typeDefs = mergeTypeDefs(typesArray);

    const server = new ApolloServer({typeDefs, resolvers});
    await server.start(); // Make sure Apollo Server is fully started

    return server
}

async function startExpress(apolloServer) {
    const app = express();
    apolloServer.applyMiddleware({app});

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
}

async function main() {
    try {

        let apollo = await startApollo()
        await startExpress(apollo)
    } catch (error) {
        console.error('Error starting Apollo Server:', error);
    }

}

main()
