import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../utils/mutations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Auth from '../../utils/auth';

const AddTrip = () => {
  const [userFormState, setFormState] = useState({
    location: '',
    journalEntry: '',
    tripDate: new Date(),
    startTripDate: new Date(),
    endTripDate: new Date(),
  });

  // const [dreamTrip, setDreamTrip] = useState(false);


  const { data: { username } } = Auth.getProfile();

  const [addTrip, { loading, error, data }] = useMutation(ADD_TRIP);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  const handleDateChange = (date, fieldName) => {
    setFormState({
      ...userFormState,
      [fieldName]: date,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { location, journalEntry, startTripDate, endTripDate } = userFormState;
    
      // If the use state of dreamTrip is false, then the start and end trip dates are included
      // if (!dreamTrip) {

        const response = await addTrip({
        variables: { location, journalEntry, startTripDate, endTripDate, username },
      })   
      // };

      // const response = await addTrip({
      // variables: { location, journalEntry, username },
      // })

      setFormState({
        location: '',
        journalEntry: '',
        startTripDate: new Date(),
        endTripDate: new Date(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  // const handleDreamTripChange = () => {
  //   setDreamTrip(!dreamTrip);
  //   if (!dreamTrip) {
  //     setFormState({
  //       ...userFormState,
  //       startTripDate: null,
  //       endTripDate: null,
  //     });
  //   }
  // };

  return (
    <div>
      <h4>Add Trip</h4>
      {loading ? <div>Loading...</div> : null}
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Location of trip"
            name="location"
            type="text"
            value={userFormState.location}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Journal entry"
            name="journalEntry"
            type="text"
            value={userFormState.journalEntry}
            onChange={handleChange}
          />
          <DatePicker
            selected={userFormState.startTripDate}
            onChange={(date) => handleDateChange(date, 'startTripDate')}
            className="form-input"
            placeholderText='Start Date'
          />
          <DatePicker
            selected={userFormState.endTripDate}
            onChange={(date) => handleDateChange(date, 'endTripDate')}
            className="form-input"
            placeholderText='End Date'
          />
          {/* <label>
            <input
              type="checkbox"
              checked={dreamTrip}
              onChange={handleDreamTripChange}
            />
            Dream Trip
          </label> */}
          <button style={{ cursor: 'pointer' }} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTrip;
