import { gql } from '@apollo/client'; // Import gql from Apollo Client to define GraphQL queries and mutations

// Mutation to add a new user
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Mutation to log in a user
export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Mutation to add a new trip
export const ADD_TRIP = gql`

mutation AddTrip($username: String!, $location: String!, $journalEntry: String!) {
  addTrip(username: $username, location: $location, journalEntry: $journalEntry) {
    username
    trips {
      location
      journalEntry
      }
    }
  }
`















