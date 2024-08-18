import { useState } from 'react';

function UpdateTrip({ trip }) {
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
    startTripDate: trip.startTripDate || new Date(),
    endTripDate: trip.endTripDate || new Date(),
  });

  const handleInputChange = (field, value) => {
    setUserFormState({
      ...userFormState,
      [field]: value,
    });
    onInputChange(trip._id, field, value); // Send changes back to the parent component
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTrip(); // Trigger the update trip function passed from the parent
  };

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
