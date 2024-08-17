import Auth from '../../utils/auth';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_TRIP } from '../../utils/mutations';

function UpcomingTrips ({ trips }) {
    const [ removeTrip, { loading, error, data } ] = useMutation(REMOVE_TRIP)


    // const [removeTrip] = useMutation(REMOVE_TRIP,
    //   ], // Refetch to update the list after deletion
    // });

    const { data: { username } } = Auth.getProfile();
    
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading trips!</p>;
  
    // const trips = data.me.trips.filter(trip => {
    //   // Filter trips where startTripDate is greater than the current date
    //   return new Date(trip.startTripDate) >= Date.now();
    // });
  
    function handleDeleteTrip(id) {
        const tripId = id;
 
      try {
       
        removeTrip({ variables: { username, tripId } });
        console.log('Trip deleted successfully');
      } catch (error) {
        console.error('Error deleting trip:', error);
      }
    }
  
    function handleUpdateTrip(id) {
      // Handle trip update logic here
    }
    return (
        <div id="trips-box">  
            {
                trips.map((trip) => {
                    // Convert trip dates to a readable format
                    const formattedStartDate = new Date(trip.startTripDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long', // e.g., January
                        day: 'numeric'  // e.g., 1
                    });
                    const formattedEndDate = new Date(trip.endTripDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    return (
                        <div key={trip._id}>
                            <p>Start Date: {formattedStartDate}</p>
                            <p>End Date: {formattedEndDate}</p>
                            <h3>{trip.location}</h3>
                            <p>{trip.journalEntry}</p>
                            <button
                            onClick={() => handleDeleteTrip(trip._id)}>
                            Delete Trip
                          </button>
                          <button
                            onClick={() => handleUpdateTrip(trip._id)}>
                            Update Trip
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}



export default UpcomingTrips;

