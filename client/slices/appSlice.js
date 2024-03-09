import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentUser: null,
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      // retrieve current user from payload
      const currentUser = ({ user } = action.payload);
      // switch boolean to true
      const isLoggedIn = true;
      return { ...state, currentUser, isLoggedIn };
    },
    logOut: (state, action) => {
      const currentUser = null;
      const isLoggedIn = false;
      return { ...state, currentUser, isLoggedIn };
    },
  },
});

export const { logIn, logOut } = appSlice.actions;

export default appSlice.reducer;
