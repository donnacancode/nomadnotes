import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './trips.css';

const IndividualTrip = ({ username }) => {
    return (
        <div>
            <Header />
            <h1>Welcome, {username}</h1>
            <img src="user-icon.png" alt="User Icon" />
            <div className="friends-box">
                <h2>Friends</h2>
                {/* Display friends here */}
            </div>
            <div className="selected-trip-box">
                {/* Display selected trip here */}
            </div>
            <Footer />
        </div>
    );
};

export default IndividualTrip;
