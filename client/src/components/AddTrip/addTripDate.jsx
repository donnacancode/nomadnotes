import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../utils/mutations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Auth from '../../utils/auth';

const AddTrip = () => {
  // Initialize form state with default values for location, journal entry, and trip date.
  const [userFormState, setFormState] = useState({
    location: '',
    journalEntry: '',
    tripDate: new Date(),
  });

  // Retrieve the logged-in user's username from the authentication profile.
  const { data: { username } } = Auth.getProfile();

  // Define the mutation hook for adding a new trip.
  const [addTrip, { loading, error, data }] = useMutation(ADD_TRIP);

  // Handle input field changes by updating the form state dynamically.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  // Handle changes to the trip date using the DatePicker component.
  const handleDateChange = (date) => {
    setFormState({
      ...userFormState,
      tripDate: date,
    });
  };

  // Handle form submission to add a new trip.
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    try {
      // Destructure the form state values and the user's username.
      const { location, journalEntry, tripDate } = userFormState;
      console.log(location, journalEntry, tripDate, username); // Log the trip details for debugging.

      // Make the mutation request to add the trip with the specified variables.
      const response = await addTrip({
        variables: { location, journalEntry, tripDate, username },
      });

      // Reset the form state to its initial values after successful submission.
      setFormState({
        location: '',
        journalEntry: '',
        tripDate: new Date(),
      });
    } catch (e) {
      console.error(e); // Log any errors that occur during the mutation request.
    }
  };

  return (
    <div>
      <h4>Add Trip</h4>
      {/* Display a loading indicator when the mutation is in progress */}
      {loading ? <div>Loading...</div> : null}
      <div>
        {/* Render the trip submission form */}
        <form onSubmit={handleFormSubmit}>
          {/* Input field for the trip location */}
          <input
            className="form-input"
            placeholder="Location of trip"
            name="location"
            type="text"
            value={userFormState.location}
            onChange={handleChange}
          />
          {/* Input field for the journal entry */}
          <input
            className="form-input"
            placeholder="Journal entry"
            name="journalEntry"
            type="text"
            value={userFormState.journalEntry}
            onChange={handleChange}
          />
          {/* Date picker for selecting the trip date */}
          <DatePicker
            selected={userFormState.tripDate}
            onChange={handleDateChange}
            className="form-input"
          />
          {/* Submit button for the form */}
          <button style={{ cursor: 'pointer' }} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrip;

