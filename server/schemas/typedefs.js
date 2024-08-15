const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    profile: String
    trips: [Trip]
    friends: [User]
  }

  type Trip {
    _id: ID
    location: String
    journalEntry: String
    comments: [Comment]
  }

    type Comment {
    _id: ID
    comment: String
    username: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    addComment(commentText: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;

module.exports = typeDefs;



// type Auth {
//   token: String
//   user: User
// }