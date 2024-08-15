import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddTrip from '../../components/AddTrip/addTripDate';
import './profile.css';
import northern_lights from '../../assets/northern_lights.png';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_USER_TRIPS } from '../../utils/queries';

import Auth from '../../utils/auth';

function Trips({ trips }) {
    return (
        <div>
            {trips.length > 0 ? (
                trips.map((trip) => (
                    <div key={trip._id}>
                        <h3>{trip.location}</h3>
                        <p>{trip.journalEntry}</p>
                    </div>
                ))
            ) : (
                <p>No trips available</p>
            )}
        </div>
    );
}


const Profile = () => {
    const { loading, data } = useQuery(GET_USER_TRIPS);
    const user = data?.me || {};

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
            <div id="header">
                {/* Include header.html */}
                {/* Add your header content here */}
            </div>
        <main>
            <img src={northern_lights} alt="Northern lights" className="profileBg"></img>
            {/* Main content */}
            <div id="main-content">
                <h1>Welcome {user.username}</h1>

                {/* Friends box */}
                <div id="friends-box">
                    <h2>Friends</h2>
                    {/* Add your friends list here */}
                </div>

                <AddTrip />

                
                <div id="trips-box">
                    <h2>Your Trips</h2>
                    {user.trips?.length > 0 ? (
                        user.trips.map((trip) => (
                            <div key={trip._id}>
                                <h3>{trip.location}</h3>
                                <p>{trip.journalEntry}</p>
                            </div>
                        ))
                    ) : (
                        <p>No trips available</p>
                    )}
                </div>

                {/* Upcoming trips box */}
                <div id="upcoming-trips-box">
                    <Link to="/upcomingtrips">Upcoming Trips</Link>
                    {/* Add your upcoming trips list here */}
                </div>

                {/* Previous trips box */}
                <div id="previous-trips-box">
                    <Link to="/previoustrips">Previous Trips</Link>
                    {/* Add your previous trips list here */}
                </div>

                {/* Dream trips box */}
                <div id="dream-trips-box">
                    <Link to="/dreamtrips">Dream Trips</Link>
                    {/* Add your dream trips list here */}
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