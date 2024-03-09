import React, { useState } from 'react';

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpForm = () => (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" require />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

  const signInForm = () => (
    <div>
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
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
      <p>this is form component</p>
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
