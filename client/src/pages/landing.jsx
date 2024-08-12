import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

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
          <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/signup" className="login-btn">Sign Up</Link>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
