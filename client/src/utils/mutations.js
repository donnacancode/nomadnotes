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
  mutation AddTrip($username: String!, $location: String!, $journalEntry: String!) {
    addTrip(username: $username, location: $location, journalEntry: $journalEntry) {
      username // Returns the username of the user who added the trip
      trips { 
        location // Returns the location of the trip
        journalEntry // Returns the journal entry for the trip
      }
    }
  }
`




// export const ADD_TRIP = gql`
// mutation AddTrip($userId: ID!, $location: String!, $journalEntry: String!) {
//   addTrip(userId: $userId, location: $location, journalEntry: $journalEntry) {
//     _id
    
//   }
// }
// `







// export const LOGIN_USER = gql
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }







// export const ADD_USER = gql`
// mutation addUser($username: String!, $email: String!, $password: String!) {
//   addUser(username: $username, email: $email, password: $password) {
//     token
//     user {
//       _id
//       username
//     }
//   }
// }
// `;

// export const LOGIN_USER = gql`
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

