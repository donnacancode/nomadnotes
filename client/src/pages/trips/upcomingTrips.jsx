import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './trips.css';

const UpcomingTrips = () => {
    return (
        <div className="container">
            <Header />
            <div className="friends-box">
                <h2>Friends</h2>
                {/* Display friends here */}
            </div>
            <div className="upcoming-trips-container">
                <div className="upcoming-trip-box">
                    {/* Display first upcoming trip here */}
                </div>
                <div className="upcoming-trip-box">
                    {/* Display second upcoming trip here */}
                </div>
                <div className="upcoming-trip-box">
                    {/* Display third upcoming trip here */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UpcomingTrips;