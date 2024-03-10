import { createSlice } from '@reduxjs/toolkit';

export const createNewPostSlice = createSlice({
  name: 'createNewPost',
  initialState: {
    body: '',
    nameOfBird: '',
    location: '',
    weather: '',
    date: '',
    time: '',
  },
  reducers: {
    updateBody: (state, action) => {
      state.body = action.payload;
    },
    updateNameOfBird: (state, action) => {
      state.updateNameOfBird = action.payload;
    },
    updateLocation: (state, action) => {
      state.updateLocation = action.payload;
    },
    updateWeather: (state, action) => {
      state.updateWeather = action.payload;
    },
    updateDate: (state, action) => {
      state.updateDate = action.payload;
    },
    updateTime: (state, action) => {
      state.updateTime = action.payload;
    },
  },
});

export const {
  updateBody,
  updateNameOfBird,
  updateLocation,
  updateWeather,
  updateDate,
  updateTime,
} = createNewPostSlice.actions;

export default createNewPostSlice.reducer;
