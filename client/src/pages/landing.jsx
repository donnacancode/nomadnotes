import React from 'react';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './styles.css';

const Landing = () => {
    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <div className="card">
                    <h1>Welcome to Nomad Notes</h1>
                    <p>Your Gateway to the World!</p>
                    <button className="signup-btn">Sign up</button>
                    <button className="login-btn">Login</button>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Landing;

