import useState from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import "./landing.css";

const Landing = () => {

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div style={{ textAlign: 'center'}}>
          <h1>Welcome to Nomad Notes</h1>
          <p>Your Gateway to the World!</p>
          <Link to="/login" className="btn btn-primary btn-lg">Log In</Link>
          <Link to="/signup" className="btn btn-primary btn-lg">Sign Up</Link>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
