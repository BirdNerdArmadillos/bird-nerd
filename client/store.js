import { configureStore } from '@reduxjs/toolkit';
import postContainerReducer from './slices/postContainerSlice.js';
import appReducer from './slices/appSlice.js';
import createNewPostReducer from './slices/createNewPostSlice.js';

export default configureStore({
  reducer: {
    postContainer: postContainerReducer,
    app: appReducer,
    createNewPost: createNewPostReducer,
  },
});
