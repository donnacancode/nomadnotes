// Define the GraphQL schema using SDL (Schema Definition Language)
const typeDefs = `
  # User type defines the structure of a user object
  type User {
    _id: ID  # Unique identifier for the user
    username: String  # Username of the user
    email: String  # Email address of the user
    profile: String  # Optional profile information for the user
    trips: [Trip]  # Array of trips associated with the user
    friends: [User]  # Array of users who are friends with this user
  }

  # Trip type defines the structure of a trip object
  type Trip {
    _id: ID  # Unique identifier for the trip
    location: String  # Location of the trip
    journalEntry: String  # Journal entry or notes about the trip
    comments: [Comment]  # Array of comments associated with the trip
  }

  # Comment type defines the structure of a comment object
  type Comment {
    _id: ID  # Unique identifier for the comment
    comment: String  # Text of the comment
    username: String  # Username of the person who made the comment
  }

  # Auth type defines the structure of the authentication response
  type Auth {
    token: String  # JWT token for the authenticated user
    user: User  # User object associated with the token
  }

  # Query type defines the read operations available in the schema
  type Query {
    users: [User]  # Query to fetch all users
    user(id: ID!): User  # Query to fetch a single user by ID
    me: User  # Query to fetch the currently authenticated user
  }

  # Mutation type defines the write operations available in the schema
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth  # Mutation to add a new user
    loginUser(username: String!, password: String!): Auth  # Mutation to log in an existing user
    addTrip(username: String!, location: String!, journalEntry: String!): User  # Mutation to add a new trip
    addComment(commentText: String!): Comment  # Mutation to add a comment to a trip
    removeComment(commentId: ID!): Comment  # Mutation to remove a comment by ID
  }
`;

module.exports = typeDefs;




// type Auth {
//   token: String
//   user: User
// }