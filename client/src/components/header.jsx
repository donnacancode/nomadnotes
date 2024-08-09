import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">Nomad Notes</div>
            <div className="dropdown">
                <button className="dropbtn">Explore</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </header>
    );
};

export default Header;