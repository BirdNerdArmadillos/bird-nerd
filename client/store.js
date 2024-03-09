import { configureStore } from '@reduxjs/toolkit';
import postContainerReducer from './slices/postContainerSlice.js';

export default configureStore({
  reducer: {
    postContainer: postContainerReducer,
  },
});
