import React, { useState } from 'react';

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpForm = () => (
    <div>
      <h2>Sign Up</h2>
      <form method='post' action='localhost:3000/auth/signup'>
        <input name='username' type='text' placeholder='Username' required />
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );

  const signInForm = () => (
    <div>
      <h2>Sign In</h2>
      <form method='get' action='localhost:3000/auth/signin'>
        <input name='username' type='text' placeholder='Username' required />
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );

  const renderForm = () => {
    if (isSignUp) {
      return signUpForm();
    } else {
      return signInForm();
    }
  };

  const switchForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {renderForm()}
      <button onClick={switchForm}>
        {isSignUp
          ? 'Already have an account? Sign In'
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Form;
