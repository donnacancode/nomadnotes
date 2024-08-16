import React from 'react'; // Import React for using JSX
import Footer from '../../components/footer'; // Import Footer component for the page footer
import './siteEntry.css'; // Import CSS for styling the login page
import baobabs from '../../assets/baobabs.png'; // Import background image for the login page
import { useState } from 'react'; // Import useState hook for managing local state
import Auth from '../../utils/auth'; // Import authentication utility for managing user sessions
import { useMutation } from '@apollo/client'; // Import useMutation hook for GraphQL mutations
import { LOGIN_USER } from '../../utils/mutations'; // Import GraphQL mutation for user login

function Login() {
    // Initialize form state with username and password fields
    const [userFormState, setFormState] = useState({
        username: '',
        password: '',
    });

    // Define mutation hook for logging in users
    const [loginUser, { error, data }] = useMutation(LOGIN_USER);

    // Handle changes in form input fields
    const handleChange = (event) => {
        const { name, value } = event.target;

        // Update state with new values from form inputs
        setFormState({
            ...userFormState,
            [name]: value,
        });
    };

    // Handle form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            const { username, password } = userFormState;

            console.log(username, password); // Log form values for debugging

            // Perform the login mutation
            const { data } = await loginUser({
                variables: { username, password },
            });

            console.log(data); // Log response data for debugging

            // Save token to local storage and redirect user upon successful login
            Auth.login(data.loginUser.token);
        } catch (e) {
            console.error(e); // Log errors if login fails
        }

        // Clear form fields after submission
        setFormState({
            username: '',
            password: '',
        });
    };

    return (
        <div>
            {/* Background image for the login page */}
            <img src={baobabs} alt="Baobabs" className="bg" />
            <div style={{ textAlign: 'center' }}>
                {/* Page header */}
                <h1 style={{ margin: '20px 0', paddingTop: '200px' }}>Welcome to Nomad Notes</h1>
                <p style={{ margin: '20px 0' }}>Your Gateway to the World</p>
                <div className="login-box" style={{ margin: '20px 0' }}>
                    {/* Login form */}
                    <h2 style={{ margin: '20px 0' }}>Login</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            required 
                            style={{ margin: '20px 0' }} 
                            value={userFormState.username}
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            required 
                            style={{ margin: '20px 0' }}
                            value={userFormState.password}
                            onChange={handleChange}                             
                        />
                        <button type="submit" style={{ margin: '20px 0' }}>Login</button>
                    </form>
                </div>
            </div>
            {/* Footer component */}
            <Footer />
        </div>
    );
}

export default Login; // Export Login component for use in other parts of the application
