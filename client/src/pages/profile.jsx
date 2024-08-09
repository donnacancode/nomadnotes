import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import './styles.css';

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
                    <h2>Upcoming Trips</h2>
                    {/* Add your upcoming trips list here */}
                </div>

                {/* Previous trips box */}
                <div id="previous-trips-box">
                    <h2>Previous Trips</h2>
                    {/* Add your previous trips list here */}
                </div>

                {/* Dream trips box */}
                <div id="dream-trips-box">
                    <h2>Dream Trips</h2>
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