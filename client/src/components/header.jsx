import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">Nomad Notes</Link>
            <nav>
            <div className="dropdown">
                <button className="dropbtn">Explore</button>
                <div className="dropdown-content">
                    <a className ="navlink1" href="#">Link 1</a>
                    <a className ="navlink2" href="#">Link 2</a>
                    <a className ="navlink3"href="#">Link 3</a>
                </div>
            </div>
            </nav>
        </header>
    );
};

export default Header;