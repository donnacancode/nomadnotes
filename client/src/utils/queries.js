import { gql } from '@apollo/client';

export const GET_ME = gql`query Me {
    me {
      _id
      username
    }
  }`;
export const GET_USER_TRIPS = gql`
    query GetUserTrips($userId: ID!) {
      user(id: $userId) {
        trips {
          _id
          destination
          startDate
          endDate
        }
      }
    }
  `;

  export const GET_TRIP = gql`
    query GetTrip($tripId: ID!) {
      trip(id: $tripId) {
        _id
        destination
        startDate
        endDate
      }
    }
  `;