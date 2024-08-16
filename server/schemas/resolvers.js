// Import the User and Trip models for database operations
const { User, Trip } = require("../models");

// Import utility functions for authentication and token management
const { signToken, AuthenticationError } = require("../utils/auth");

const { GraphQLScalarType, Kind } = require('graphql');

const resolvers = {
  Query: {
    // Query to fetch all users
    users: async () => {
      return await User.find({});
    },

    // Query to fetch a single user by ID (commented out in this version)
    // user: async (_, { id }) => {
    //   return await User.findById(id);
    // },

    // Query to fetch the currently authenticated user
    me: async (parent, args, context) => {
      // Check if the user is authenticated
      if (context.user) {
        // Find and return the user based on the ID from context, and populate the trips field
        return await User.findOne({ _id: context.user._id }).populate('trips');
      }
      // Throw an authentication error if the user is not authenticated
      throw AuthenticationError;
    },
  },

  Mutation: {
    // Mutation for adding a new user
    addUser: async (parent, args) => {
      console.log(args);
      try {
        const { username, email, password } = args;
        // Create the user with the provided username, email, and password
        const user = await User.create({ username, email, password });
        // If user creation fails, throw an error
        if (!user) {
          throw new Error('Something is wrong!');
        }
        // Generate a token for the user
        const token = signToken(user);
        // Return the created user object and the token
        return { token, user };
      } catch (error) {
        console.error(error);
        // Return a specific error message in case of failure
        throw new Error('Failed to create user');
      }
    },

    // Mutation for logging in an existing user
    loginUser: async (parent, { username, password }) => {
      // Find the user by username
      const user = await User.findOne({ username });

      // Throw an authentication error if the user does not exist
      if (!user) {
        throw AuthenticationError;
      }

      // Check if the provided password matches the stored hashed password
      const correctPw = await user.isCorrectPassword(password);

      // Throw an authentication error if the password is incorrect
      if (!correctPw) {
        throw AuthenticationError;
      }

      // Generate a token for the user
      const token = signToken(user);
      // Return the token and user object
      return { token, user };
    },

    addTrip : async (parent, args, context) => {
      console.log(args)
      if(context.user) {
        const { location, journalEntry } = args;
        // Create the user with the provided username, email, and password
        const trip = await Trip.create({
           location, 
           journalEntry, 
        });

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trips: trip } },
          { new: true, runValidators: true }
        );
        // Return the updated user object
        return user;
      }
      // Optionally throw an error if the user is not authenticated
      // throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;

