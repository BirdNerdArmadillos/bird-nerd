import React from 'react';
// import Board from './Board.jsx';
// TODO: import components that the frontend team creates
import { useSelector } from '@reduxjs/toolkit';

const App = () => {
  const isLoggedIn = useSelector((state) => state.app.isLoggedIn);
  // return either the signin or main feed depending on whethere the user is logged in or not
  // TODO: replace these component names with whatever the frontend team names them
  return isLoggedIn ? <FeedComponent /> : <SignInComponent />;
};

export default App;
