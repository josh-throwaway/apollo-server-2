const { gql } = require("apollo-server");

const typeDefs = gql`
  type TestUser {
    id: Int!
    name: String!
  }

  type Query {
    testUser(id: Int!): TestUser
    allTestUsers: [TestUser!]
  }

  type Mutation {
    createTestUser(name: String!): TestUser!
  }
`;

module.exports = typeDefs;
