const resolvers = {
  Query: {
    testUser(root, { id }, { models }) {
      return models.TestUser.findOne({
        where: {
          id: id
        }
      });
    },

    allTestUsers(root, args, { models }) {
      return models.TestUser.findAll();
    },

    allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },

  Mutation: {
    createTestUser(root, { name }, { models }) {
      return models.TestUser.create({
        name
      });
    },

    createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
