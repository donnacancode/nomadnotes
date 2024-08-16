import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Define the header section for the webpage
        <header>
            {/* Link to the homepage with the logo text */}
            <Link to="/" className="logo">Nomad Notes</Link>
            
            {/* Navigation section */}
            <nav>
                {/* Dropdown menu for exploration options */}
                <div className="dropdown">
                    {/* Button that triggers the dropdown */}
                    <button className="dropbtn">Explore</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
