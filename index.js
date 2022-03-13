const { ApolloServer, gql } = require("apollo-server");

const typeDefs = require("./testSchema");
const resolvers = require("./testResolvers");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
