import { useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { UPDATE_TRIP } from '../../utils/mutations';
const { data: { username } } = Auth.getProfile();

function UpdateTrip({ trip }) {
  const tripId = trip._id
  const formattedStartDate = new Date(trip.startTripDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedEndDate = new Date(trip.endTripDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [userFormState, setUserFormState] = useState({
    location: '',
    journalEntry: '',
    startTripDate: trip.startTripDate || null,
    endTripDate: trip.endTripDate || null,
  });


  const [updateTrip] = useMutation(UPDATE_TRIP);

  const { data: { username } } = Auth.getProfile();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormState({
      ...userFormState,
      [name]: value,
    });
    // onInputChange(trip._id, field, value); 
    // Send changes back to the parent component
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { location, journalEntry, startTripDate, endTripDate } = userFormState;
    
      if (!startTripDate && !endTripDate) {

        await updateDreamTrip({
          variables: { tripId, location, journalEntry, username },
        });
      }
      else {

        await updateTrip({
          variables: { tripId, location, journalEntry, username, startTripDate, endTripDate },
        });
      }
    }


  return (
    <form onSubmit={handleSubmit}>
      <div>
      <p>Start Date: {formattedStartDate} asdfsdfasadf</p>
        {/* <input
          type="date"
          value={userFormState.startTripDate ? new Date(userFormState.startTripDate).toISOString().split('T')[0] : ''}
          onChange={(e) => handleInputChange('startTripDate', e.target.value)}
        /> */}
      </div>
      <div>
      <p>End Date: {formattedEndDate} afsdasdfasdf</p>
        {/* <input
          type="date"
          value={userFormState.endTripDate ? new Date(userFormState.endTripDate).toISOString().split('T')[0] : ''}
          onChange={(e) => handleInputChange('endTripDate', e.target.value)}
        /> */}
      </div>
      <div>
      <h3>{trip.location}</h3>
        <input
              className="form-input"
              placeholder="Location of trip"
              name="location"
              type="text"
              value={userFormState.location}
              onChange={handleInputChange}
            />
      </div>
      <div>
      <p>{trip.journalEntry}</p>
        <input
              className="form-input"
              placeholder="Journal entry"
              name="journalEntry"
              type="text"
              value={userFormState.journalEntry}
              onChange={handleInputChange}
            />
      </div>
      <button type="submit">Update Trip</button>
    </form>
  );
}

export default UpdateTrip;
