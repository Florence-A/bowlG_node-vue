require("dotenv").config();

// Import the different modules needed to start the server.
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// Import the graphql configuration.
const { typeDefs, resolvers } = require("./app");

// Create a new Apollo server instance.
const server = new ApolloServer({
    typeDefs,
    resolvers
});

  
(async () => {
// Start the server as a standalone server.
const { url } = await startStandaloneServer(server);

// Output the URL where the server is running.
console.log(`🚀 Server ready at ${url}`);
})();