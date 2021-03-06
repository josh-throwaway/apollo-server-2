const createSlug = require("./util/createSlug.js");

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
    },

    linkBySlug(root, { slug }, { models }) {
      return models.Link.findOne({
        where: {
          slug
        }
      });
    }
  },

  Mutation: {
    createTestUser(root, { name }, { models }) {
      return models.TestUser.create({
        name
      });
    },

    createLink(root, { url, slug }, { models }) {
      if (slug && slug.length < 4) {
        // this is returning null when hit instead of string,
        // would love to know why
        return "Slug must be a minimum of 4 alpha-numeric characters";
      }

      if (!slug) {
        slug = createSlug();
      }

      return models.Link.create({
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
