import { configureStore } from '@reduxjs/toolkit';
import postContainerReducer from './slices/postContainerSlice.js';
import appReducer from './slices/appSlice.js';

export default configureStore({
  reducer: {
    postContainer: postContainerReducer,
    app: appReducer,
  },
});
