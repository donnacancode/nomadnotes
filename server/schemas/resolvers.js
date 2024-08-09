import { AuthenticationError } from 'apollo-server-express';
import userModel from './models/userModel';
import { signToken } from './utils/auth';

const resolvers = {
  Query: {
    // Query to fetch all users
    users: async () => {
      return await userModel.find({});
    },
    // Query to fetch a single user by ID
    user: async (_, { id }) => {
      return await userModel.findById(id);
    },
    // Query to fetch the currently authenticated user
    me: async (_, __, context) => {
      if (context.user) {
        return await userModel
          .findById(context.user._id)
          .select("-__v -password");
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    // Mutation for adding a new user
    addUser: async (_, { username, email, password }) => {
      const user = await userModel.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Mutation for logging in an existing user
    loginUser: async (_, { email, password }) => {
      const user = await userModel.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

export default resolvers;
