import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Login() {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Welcome to Nomad Notes</h1>
                <p>Your Gateway to the World</p>
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" name="username" required />
                        <input type="password" placeholder="Password" name="password" required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;