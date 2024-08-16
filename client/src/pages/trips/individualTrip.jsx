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

    // Display loading state while data is being fetched
    if (loading) return <p>Loading...</p>;
    
    // Display error message if there is an issue with the query
    if (error) return <p>Error: {error.message}</p>;

    // Extract trip data from the query result
    const trip = data.trip;

    return (
        <div>
            {/* Render the Header component */}
            <Header />
            
            {/* Render the Trip component with the fetched trip data */}
            <Trip trip={trip} />
            
            {/* Render the Footer component */}
            <Footer />
        </div>
    );
};

export default IndividualTrip; // Export IndividualTrip component for use in other parts of the application
