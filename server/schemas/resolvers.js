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
    // me: async (_, __, context) => {
    //   if (context.user) {
    //     return await User.findById(context.user._id).select("-__v -password");
    //   }
    //   throw AuthenticationError;
    // },
  },

  Mutation: {
    // Mutation for adding a new user
    addUser: async (parent, args) => {
      console.log(args)
      try {
  
        const { username, email, password } = args;
  
        // Create the user with the provided username, email, and password
        const user = await User.create({ username, email, password });
  
  
        // If user creation fails, throw an error
        if (!user) {
          throw new Error('Something is wrong!');
        }
  
        // Return the created user object
        return { user };
      } catch (error) {
        console.error(error);
        // You can throw the error to be caught by the client-side, or return a specific error message
        throw new Error('Failed to create user');
      }
    }
    // Mutation for logging in an existing user
    // loginUser: async (_, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw AuthenticationError;
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw AuthenticationError;
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // },

    // addComment: async (_, { commentText }, context) => {},
    // removeComment: async (_, { commentId }, context) => {},
  }
};

module.exports = resolvers;
