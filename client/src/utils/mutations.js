import { gql } from '@apollo/client';

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
`
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

