import Auth from '../../utils/auth';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_TRIP, UPDATE_TRIP } from '../../utils/mutations';

function UpcomingTrips ({ trips }) {
   
    const [removeTrip] = useMutation(REMOVE_TRIP);
    const [updateTrip] = useMutation(UPDATE_TRIP);

    const { data: { username } } = Auth.getProfile();  
    
    const [formState, setFormState] = useState({});
    const [showFormState, setShowFormState] = useState({});

    const handleInputChange = (tripId, field, value) => {
      setFormState({
        ...formState,
        [tripId]: {
          ...formState[tripId],
          [field]: value,
        },
      });
    };

    const toggleFormVisibility = (tripId) => {
      setShowFormState((prevState) => ({
        ...prevState,
        [tripId]: !prevState[tripId], // Toggle visibility
      }));
    };
    
    const handleDeleteTrip = (tripId) => {
      try {
        removeTrip({ variables: { username, tripId } });
        console.log('Trip deleted successfully');
      } catch (error) {
        console.error('Error deleting trip:', error);
      }
    };

    const handleUpdateTrip = (tripId) => {
      const tripData = formState[tripId];
      if (!tripData) {
        console.error('No form data available for update');
        return;
      }

      const { location, journalEntry, startTripDate, endTripDate } = tripData;
      try {
        updateTrip({
          variables: { username, location, journalEntry, startTripDate, endTripDate },
        });
        console.log('Trip updated successfully');
      } catch (error) {
        console.error('Error updating trip:', error);
      }
    };

    return (
        <div id="trips-box">
          {trips.map((trip) => {
            // Convert trip dates to a readable format
            const formattedStartDate = new Date(trip.startTripDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const formattedEndDate = new Date(trip.endTripDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const tripForm = formState[trip._id] || {};
            const showForm = showFormState[trip._id] || false; // Check if the form should be visible

            return (
              <div key={trip._id}>
              {showForm || (
                <div>
                  <p>Start Date: {formattedStartDate}</p>
                  <p>End Date: {formattedEndDate}</p>
                  <h3>{trip.location}</h3>
                  <p>{trip.journalEntry}</p>
                </div>
              )              
              }


                {showForm && (
                  <form onSubmit={handleUpdateTrip}>
                  <p>Start Date: {formattedStartDate}</p>
                    <input
                    className="form-input"
                    placeholder="Location of trip"
                    name="location"
                      type="date"
                      value={tripForm.startTripDate || new Date(trip.startTripDate).toISOString().split('T')[0]}
                      onChange={(e) => handleInputChange(trip._id, 'startTripDate', e.target.value)}
                    />

                  <p>End Date: {formattedEndDate}</p>
                    <input
                     className="form-input"
                     placeholder="Location of trip"
                      type="date"
                      value={tripForm.endTripDate || new Date(trip.endTripDate).toISOString().split('T')[0]}
                      onChange={handleInputChange(trip._id, 'endTripDate', e.target.value)}
                    />

                  <h3>{trip.location}</h3>

                    <input
                      type="text"
                      value={tripForm.location || trip.location}
                      onChange={(e) => handleInputChange(trip._id, 'location', e.target.value)}
                    />

                    <p>{trip.journalEntry}</p>
                    <textarea
                      value={tripForm.journalEntry || trip.journalEntry}
                      onChange={(e) => handleInputChange(trip._id, 'journalEntry', e.target.value)}
                    />
                    <button onClick={() => handleUpdateTrip(trip._id)}>
                    Update Trip
                    </button>
                  </form>
                )}

                <button onClick={() => toggleFormVisibility(trip._id)}>
                  {showForm ? 'Hide Update Form' : 'Show Update Form'}
                </button>

                <button onClick={() => handleDeleteTrip(trip._id)}>
                  Delete Trip
                </button>


              </div>
            );
          })}
        </div>
    );
}

export default UpcomingTrips;


