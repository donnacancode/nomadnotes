import { gql } from '@apollo/client'; // Import gql from Apollo Client to define GraphQL queries and mutations

// Mutation to add a new user
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token // Returns the authentication token for the new user
      user {
        _id // Returns the user ID
        username // Returns the user's username
        email // Returns the user's email
      }
    }
  }
`;

// Mutation to log in a user
export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token // Returns the authentication token for the logged-in user
      user {
        _id // Returns the user ID
        username // Returns the user's username
      }
    }
  }
`;

// Mutation to add a new trip
export const ADD_TRIP = gql`

mutation AddTrip($username: String!, $location: String!, $journalEntry: String!, $startTripDate: Date!, $endTripDate: Date!) {
  addTrip(username: $username, location: $location, journalEntry: $journalEntry, startTripDate: $startTripDate, endTripDate: $endTripDate) {
    username
    trips {
      location
      journalEntry
      startTripDate
      endTripDate
    }
  }
`















