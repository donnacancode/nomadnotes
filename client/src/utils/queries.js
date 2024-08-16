import React from 'react'; // Import React library
import Header from '../../components/header'; // Import Header component for the page header
import Footer from '../../components/footer'; // Import Footer component for the page footer
import './trips.css'; // Import CSS for styling the IndividualTrip page
// import { GET_TRIP } from '../../graphql/queries'; // Import GraphQL query for fetching trip data
import Trip from '../../components/trip'; // Import Trip component to display individual trip details

const IndividualTrip = ({ username }) => {
    // Execute the GET_TRIP query to fetch the trip details
    const { loading, error, data } = useQuery(GET_TRIP, {
        variables: {
            tripId: 'PLACEHOLDER_TRIP_ID' // Replace with the actual trip ID to fetch data for a specific trip
        }
    });

export const GET_USER_TRIPS = gql`
  query getUserTrips {
    me {
      _id
      username
      trips {
        _id
        location
        journalEntry
        startTripDate
        endTripDate
      }
    }
  }
`;

  export const GET_TRIP = gql`
    query GetTrip($tripId: ID!) {
      trip(id: $tripId) {
        _id
        destination
        startTripDate
        endTripDate
      }
    }
  `;