import React from 'react';
import './styles.css';

const Landing = () => {
    return (
        <div>
            <header>
                {/* Include header.html here */}
                {/* Example: <include src="header.html"></include> */}
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
                {/* Include footer.html here */}
                {/* Example: <include src="footer.html"></include> */}
            </footer>
        </div>
    );
}
