import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 className="logo">Nomad Notes</h1>
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