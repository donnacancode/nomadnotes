
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const SignUp = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Header />
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to nomad notes</h1>
                <h3>You're Gateway to the World</h3>
                <h4>Sign Up</h4>
                <div>
                    <label htmlFor="username">Username:</label>
                    <textarea id="username" name="username" placeholder="Enter your username"></textarea>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <textarea id="email" name="email" placeholder="Enter your email"></textarea>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <textarea id="password" name="password" placeholder="Enter your password"></textarea>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <textarea id="confirmPassword" name="confirmPassword" placeholder="Confirm your password"></textarea>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;

