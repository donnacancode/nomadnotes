import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddTrip from '../../components/addTripDate';
import './profile.css';
import northern_lights from '../../assets/northern_lights.png';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useLazyQuery} from '@apollo/client';

import { GET_USER_TRIPS } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {
    const [loadUserTrips, { called, loading, data }] = useLazyQuery(GET_USER_TRIPS);
    // const user = data?.me || {};
    const [user, setUser] = useState({})
    useEffect(() => {
        loadUserTrips();
        if (data) {
            setUser(data.me)
        }
    }, [data, user.trips])

    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <main>
                <img src={northern_lights} alt="Northern lights" className="profileBg"></img>
                {/* Main content */}
                <div id="main-content">
                    <h1>Welcome {user.username}</h1>

                    <AddTrip loadUserTrips={loadUserTrips}/>

                    {/* Upcoming trips box */}
                    <div id="upcoming-trips-box">
                        <Link to="/upcomingtrips">Upcoming Trips</Link>
                    </div>

                    {/* Previous trips box */}
                    <div id="previous-trips-box">
                        <Link to="/previoustrips">Previous Trips</Link>
                    </div>

                    {/* Dream trips box */}
                    <div id="dream-trips-box">
                        <Link to="/dreamtrips">Dream Trips</Link>
                    </div>

                    <div id="trips-box">
                        <h2>Your Trips</h2>
                        {user.trips?.length > 0 ? (
                            user.trips.map((trip) => (
                                <div key={trip._id}>
                                {/* <p>{trip.startTripDate}</p>
                                <p>{trip.endTripDate}</p> */}
                                <h3>{trip.location}</h3>
                                <p>{trip.journalEntry}</p>
                                </div>
                            ))
                        ) : (
                            <p>No trips set yet!</p>
                        )}
                    </div>

                </div>

                {/* User icon box */}
                <div id="user-icon-box">
                    {/* Add your user icon here */}
                </div>
            </main>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Profile;