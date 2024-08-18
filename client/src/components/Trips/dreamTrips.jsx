

function DreamTrips ({ trips }) {

    function handleDeleteTrip(id) {
        fetch(`/api/trips/${id}`, {
        method: 'DELETE',
        })
        .then(() => {
        window.location.reload();
        });
    }

    function handleUpdateTrip(id) {
        fetch(`/api/trips/${id}`, {
        method: 'PUT',
        })
        .then(() => {
        window.location.reload();
        });
    }
    
      return (
          <div id="trips-box">
              {
                  trips.map((trip) => (
                      <div key={trip._id}>
                          <p>{trip.startTripDate}</p>
                          <p>{trip.endTripDate}</p>
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
                  ))
         }
          </div>
      );
  }
  
  export default DreamTrips;
  
  