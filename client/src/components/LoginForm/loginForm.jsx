import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const Login = (props) => {
  // Initialize the form state with default values for email and password.
  const [userFormState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error, data }] = useMutation(LOGIN_USER); // Uncomment to use the login mutation.

  // Function to handle changes in the input fields.
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the form state dynamically based on the input field that changed.
    setFormState({
      ...userFormState,
      [name]: value,
    });
  };

  // Function to handle form submission.
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.
    console.log(userFormState); // Log the current form state to the console.

    // Uncomment the following code to enable user login with the login mutation.
    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.login.token); // Log the user in with the returned token.
    // } catch (e) {
    //   console.error(e); // Log any errors to the console.
    // }

    // Clear the form values after submission.
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <div>
        <div>
          <h4>Login</h4>
          <div>
            {/* Render the login form */}
            <form onSubmit={handleFormSubmit}>
              {/* Input field for the email */}
              <input
                placeholder="Your email"
                name="email"
                type="email"
                value={userFormState.email}
                onChange={handleChange}
              />
              {/* Input field for the password */}
              <input
                placeholder="******"
                name="password"
                type="password"
                value={userFormState.password}
                onChange={handleChange}
              />
              {/* Input field for confirming the password (currently not functioning) */}
              <input
                placeholder="******"
                name="confirm-password"
                type="password"
                value={userFormState.password}
                onChange={handleChange}
              />
              {/* Submit button */}
              <button style={{ cursor: 'pointer' }} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



// {data ? (
//   <p>
//     Success! You may now head{' '}
//     <Link to="/">back to the homepage.</Link>
//   </p>
// ) : (


// )}




// {error && (
//   <div>
//     {error.message}
//   </div>
// )}
