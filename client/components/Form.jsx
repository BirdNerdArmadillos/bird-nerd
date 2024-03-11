import React, { useState } from 'react';

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpForm = () => (
    <div className="sign-up">
      <h2 className="sign-up-text">Sign Up</h2>
      <form className="sign-up-form">
        <input
          className="sign-up-username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="sign-up-password"
          type="password"
          placeholder="Password"
          require
        />
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );

  const signInForm = () => (
    <div className="sign-in">
      <h2 className="sign-in-text">Sign In</h2>
      <form className="sign-in-form">
        <input
          className="sign-in-username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          className="sign-in-password"
          type="password"
          placeholder="Password"
          required
        />
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
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
      <button className="switch-button" onClick={switchForm}>
        {isSignUp
          ? 'Already have an account? Sign In'
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Form;
