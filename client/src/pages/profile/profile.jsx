import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AddTrip from '../../components/AddTrip/addTripDate';
import UpcomingTrips from '../../components/Trips/upcomingTrips';
import PreviousTrips from '../../components/Trips/previousTrips';
import './profile.css';
import northern_lights from '../../assets/northern_lights.png';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useLazyQuery} from '@apollo/client';

import { GET_USER_TRIPS } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {
    const [loadUserTrips, { called, loading, data }] = useLazyQuery(GET_USER_TRIPS);
    // const user = data?.me || {};

    const upcomingTrips = []
    const prevTrips = []

    const [user, setUser] = useState({ trips: [] })
    useEffect(() => {
        loadUserTrips();
        if (data) {
            setUser(data.me)
        }
    }, [data, user.trips])

    for (const trip of user.trips) {
        const startTripDate = new Date(trip.startTripDate).getTime();       

        if (startTripDate > Date.now()) {
            upcomingTrips.push(trip);
        }
        if (startTripDate < Date.now()) {
            prevTrips.push(trip);
        }
    }

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
            <main id="profile">
                <img src={northern_lights} alt="Northern lights" className="profileBg"></img>
                {/* Main content */}
                <div id="main-content">
                    <h1>Welcome {user.username}</h1>

                    <AddTrip />

                    {/* Upcoming trips box */}
                    <div id="upcoming-trips-box">
                        <Link to="/upcomingtrips">Upcoming Trips</Link>
                        <UpcomingTrips
                        trips = {upcomingTrips} />
                    </div>

                    {/* Previous trips box */}
                    <div id="previous-trips-box">
                        <Link to="/previoustrips">Previous Trips</Link>
                        <PreviousTrips
                        trips = {prevTrips} />
                    </div>

                    {/* Dream trips box */}
                    <div id="dream-trips-box">
                        <Link to="/dreamtrips">Dream Trips</Link>

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