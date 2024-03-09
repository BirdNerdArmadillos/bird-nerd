import { configureStore } from '@reduxjs/toolkit';
import postContainerReducer from './slices/tileSlice.js';

export default configureStore({
  reducer: {
    postContainer: postContainerReducer,
  },
});
