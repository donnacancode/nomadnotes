import React from 'react';
import userModel from '../userModel';

const Header = () => {
    // Access user information from the userModel
    const { name, email } = userModel;

    return (
        <header>
            <h1>Welcome, {name}!</h1>
            <p>Email: {email}</p>
        </header>
    );
};

export default Header;