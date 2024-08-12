import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';


const Profile = ({ username }) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div id="header">
                {/* Include header.html */}
                {/* Add your header content here */}
            </div>

            {/* Main content */}
            <div id="main-content">
                <h1>Welcome {username}</h1>

                {/* Friends box */}
                <div id="friends-box">
                    <h2>Friends</h2>
                    {/* Add your friends list here */}
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

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Profile;