import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Landing from "./pages/landing";
import DreamTrips from "./pages/dreamTrips.jsx";
import IndividualTrip from "./pages/individualTrip.jsx";
import Login from "./pages/login.jsx";
import PreviousTrips from "./pages/previousTrips.jsx";
import Profile from "./pages/profile.jsx";
import Signup from "../src/components/SignupForm/signupForm.jsx";
import UpcomingTrips from "./pages/upcomingTrips.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/dreamtrips",
        element: <DreamTrips />,
      },
      {
        path: "/individualtrip",
        element: <IndividualTrip />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/previoustrips",
        element: <PreviousTrips />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/upcomingtrips",
        element: <UpcomingTrips />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// Will delete the lines below eventually
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
