import { useState } from 'react'; // Import useState hook for managing local state
import Header from '../../components/header'; // Import Header component for the page header
import Footer from '../../components/footer'; // Import Footer component for the page footer
import { Link } from 'react-router-dom'; // Import Link component for navigation
import { useMutation } from '@apollo/client'; // Import useMutation hook for GraphQL mutations
import { ADD_USER } from '../../utils/mutations'; // Import GraphQL mutation for adding a user
import Auth from '../../utils/auth'; // Import authentication utility for managing user sessions
import './siteEntry.css'; // Import CSS for styling the signup page

const SignUp = () => {
    // Initialize form state with username, email, and password fields
    const [userFormState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Define mutation hook for adding a new user
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
            const { username, email, password } = userFormState;

            // Perform the mutation to add a new user
            const { data } = await addUser({
                variables: { username, email, password },
            });

            console.log(data); // Log response data for debugging

            // Save token to local storage and redirect user upon successful signup
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e); // Log errors if signup fails
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {/* Header component */}
            <Header />
            <div style={{ textAlign: 'center' }}>
                {/* Main content */}
                <div>
                    <h4>Sign Up</h4>
                    <form onSubmit={handleFormSubmit}>
                        {/* Input field for username */}
                        <input
                            className="form-input"
                            placeholder="Your username"
                            name="username"
                            type="text"
                            value={userFormState.username}
                            onChange={handleChange}
                        />
                        {/* Input field for email */}
                        <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={userFormState.email}
                            onChange={handleChange}
                        />
                        {/* Input field for password */}
                        <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            value={userFormState.password}
                            onChange={handleChange}
                        />
                        {/* Submit button */}
                        <button
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default SignUp; // Export SignUp component for use in other parts of the application


