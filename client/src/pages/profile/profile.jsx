import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AddTrip from "../../components/AddTrip/addTripDate";
import UpcomingTrips from "../../components/Trips/upcomingTrips";
import PreviousTrips from "../../components/Trips/previousTrips";
import DreamTrips from "../../components/Trips/dreamTrips";
import "./profile.css";
import northern_lights from "../../assets/northern_lights.png";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_USER_TRIPS } from "../../utils/queries";
import Auth from "../../utils/auth";

const Profile = () => {
  const [loadUserTrips, { loading, data }] = useLazyQuery(GET_USER_TRIPS);
  const upcomingTrips = [];
  const prevTrips = [];
  const dreamTrips = [];

  const [user, setUser] = useState({ trips: [] });

  useEffect(() => {
    loadUserTrips();
    if (data) {
      setUser(data.me);
    }
  }, [data, user.trips, loadUserTrips]);

  for (const trip of user.trips) {
    let startTripDate = "";
    if (trip.startTripDate) {
      startTripDate = new Date(trip.startTripDate).getTime();
    }

    if (startTripDate === "") {
      dreamTrips.push(trip);
    } else if (startTripDate > Date.now()) {
      upcomingTrips.push(trip);
    } else {
      prevTrips.push(trip);
    }
  }

  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main id="profile">
        <img
          src={northern_lights}
          alt="Northern lights"
          className="profileBg"
        />
        <div id="main-content">
          <h1>Welcome, {user.username}!</h1>

          <AddTrip />

          <div className="trip-boxes-container">
            <div id="upcoming-trips-box">
              <Link to="/upcomingtrips">Upcoming Trips</Link>
              <UpcomingTrips trips={upcomingTrips} />
            </div>

            <div id="previous-trips-box">
              <Link to="/previoustrips">Previous Trips</Link>
              <PreviousTrips trips={prevTrips} />
            </div>

            <div id="dream-trips-box">
              <Link to="/dreamtrips">Dream Trips</Link>
              <DreamTrips trips={dreamTrips} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
