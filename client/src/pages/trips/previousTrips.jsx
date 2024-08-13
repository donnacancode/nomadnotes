import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './trips.css';

const PreviousTrips = () => {
    return (
        <div>
            <Header />
            <header>
                <h1>Previous Trips</h1>
                <img src="user-icon.png" alt="User Icon" />
            </header>
            <div className="friends-box">
                <h2>Friends</h2>
                {/* Friends list goes here */}
            </div>
            <div className="previous-trips-container">
                <div className="previous-trip-box">
                    {/* First previous trip content goes here */}
                </div>
                <div className="previous-trip-box">
                    {/* Second previous trip content goes here */}
                </div>
                <div className="previous-trip-box">
                    {/* Third previous trip content goes here */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PreviousTrips;

