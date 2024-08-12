const { User, Trip } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // Query to fetch all users
    users: async () => {
      return await User.find({});
    },
    // Query to fetch a single user by ID
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    // Query to fetch the currently authenticated user
    me: async (_, __, context) => {
      if (context.user) {
        return await User.findById(context.user._id).select("-__v -password");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    // Mutation for adding a new user
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Mutation for logging in an existing user
    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addComment: async (_, { commentText }, context) => {},
    removeComment: async (_, { commentId }, context) => {},
  },
};

module.exports = resolvers;
