const { gql } = require("apollo-server");

const typeDefs = gql`
  type TestUser {
    id: Int!
    name: String!
  }

  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    testUser(id: Int!): TestUser
    allTestUsers: [TestUser!]

    allLinks: [Link!]
  }

  type Mutation {
    createTestUser(name: String!): TestUser!

    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;
