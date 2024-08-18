import React from "react";

function PreviousTrips({ trips }) {
  return (
    <div id="trips-box">
      {trips.map((trip) => {
        // Convert trip dates to a readable format
        const formattedStartDate = new Date(
          trip.startTripDate
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const formattedEndDate = new Date(trip.endTripDate).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );

        return (
          <div key={trip._id}>
            <p>Start Date: {formattedStartDate}</p>
            <p>End Date: {formattedEndDate}</p>
            <h3>{trip.location}</h3>
            <p>{trip.journalEntry}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PreviousTrips;

// return (
//     <div key={trip._id}>
//     <div>
//       <p>Start Date: {formattedStartDate}</p>
//       <p>End Date: {formattedEndDate}</p>
//       <h3>{trip.location}</h3>
//       <p>{trip.journalEntry}</p>
//     </div>

//     {showForm && (
//       <form key={trip._id} onSubmit={(e) => e.preventDefault()}>
//       <p>Start Date: {formattedStartDate}</p>
//       <input
//         type="date"
//         value={tripForm.startTripDate || new Date(trip.startTripDate).toISOString().split('T')[0]}
//         onChange={(e) => handleInputChange(trip._id, 'startTripDate', e.target.value)}
//       />

//       <p>End Date: {formattedEndDate}</p>
//         <input
//           type="date"
//           value={tripForm.endTripDate || new Date(trip.endTripDate).toISOString().split('T')[0]}
//           onChange={(e) => handleInputChange(trip._id, 'endTripDate', e.target.value)}
//         />

//         <h3>{trip.location}</h3>
//         <input
//           type="text"
//           value={tripForm.location || trip.location}
//           onChange={(e) => handleInputChange(trip._id, 'location', e.target.value)}
//         />

//         <p>{trip.journalEntry}</p>
//         <textarea
//           value={tripForm.journalEntry || trip.journalEntry}
//           onChange={(e) => handleInputChange(trip._id, 'journalEntry', e.target.value)}
//         />
//       </form>
//     )}
//     <button
//     onClick={() => handleDeleteTrip(trip._id)}>
//     Delete Trip
//     </button>
//     <button
//     onClick={() => handleUpdateTrip(trip._id)}>
//     Update Trip
//     </button>
//     </div>
//   );

// function UpcomingTrips ({ trips }) {

//   const [removeTrip, { loading: removeTripLoading, data: dataAddTrip }] = useMutation(REMOVE_TRIP);
//   const [updateTrip, { loading: updateTripLoading, data: dataUpdateTrip }] = useMutation(UPDATE_TRIP);

//   const { data: { username } } = Auth.getProfile();

//   const [formState, setFormState] = useState({});
//   const [showFormState, setShowFormState] = useState({});

//   const handleInputChange = (tripId, field, value) => {
//     setFormState({
//       ...formState,
//       [tripId]: {
//         ...formState[tripId],
//         [field]: value,
//       },
//     });
//   };

// const handleUpdateTrip = (tripId) => {
//   const tripData = formState[tripId];
//   const { location, journalEntry, startTripDate, endTripDate } = tripData;

//   try {
//     updateTrip({
//       variables: { username, location, journalEntry, startTripDate, endTripDate },
//     });
//     console.log('Trip updated successfully');
//   } catch (error) {
//     console.error('Error updating trip:', error);
//   }
// }

// if (loading) return <p>Loading...</p>;
// if (error) return <p>Error loading trips!</p>;

// const trips = data.me.trips.filter(trip => {
//   // Filter trips where startTripDate is greater than the current date
//   return new Date(trip.startTripDate) >= Date.now();
// });

//     const toggleFormVisibility = (tripId) => {
//       setShowFormState((prevState) => ({
//         ...prevState,
//         [tripId]: !prevState[tripId], // Toggle visibility
//       }));
//     };

//     function handleDeleteTrip(id) {

//         const tripId = id;

//       try {

//         removeTrip({ variables: { username, tripId } });
//         console.log('Trip deleted successfully');
//       } catch (error) {
//         console.error('Error deleting trip:', error);
//       }
//     }

//     function handleUpdateTrip(id) {
//       try {

//         removeTrip({ variables: { username, tripId } });
//         console.log('Trip deleted successfully');
//       } catch (error) {
//         console.error('Error deleting trip:', error);
//       }
//     }

//     return (
//         <div id="trips-box">
//           {trips.map((trip) => {
//                     // Convert trip dates to a readable format
//               const formattedStartDate = new Date(trip.startTripDate).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long', // e.g., January
//                   day: 'numeric'  // e.g., 1
//               });
//               const formattedEndDate = new Date(trip.endTripDate).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric'
//               });

//               const tripForm = formState[trip._id] || {};
//               const showForm = showFormState[trip._id] || false; // Check if the form should be visible

//               return (
//                 <div></div>
//               );

//           }

//         </div>
//     );
// }
