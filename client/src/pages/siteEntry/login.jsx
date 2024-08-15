import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './siteEntry.css';
import baobabs from '../../assets/baobabs.png';

function Login() {
    return (
        <div>
            <Header />
            <img src={baobabs} alt="Baobabs" className="bg" />
            <div style={{ textAlign: 'center'}}>
                <h1 style={{ margin: '20px 0' }}>Welcome to Nomad Notes</h1>
                <p style={{ margin: '20px 0' }}>Your Gateway to the World</p>
                <div className="login-box" style={{ margin: '20px 0' }}>
                    <h2 style={{ margin: '20px 0' }}>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" name="username" required style={{ margin: '20px 0' }} />
                        <input type="password" placeholder="Password" name="password" required style={{ margin: '20px 0' }} />
                        <button type="submit" style={{ margin: '20px 0' }}>Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;