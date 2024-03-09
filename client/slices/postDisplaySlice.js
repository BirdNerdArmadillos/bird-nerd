import { createSlice } from '@reduxjs/toolkit';

export const postDisplaySlice = createSlice({
  name: 'postDisplay',
  initialState: {
    posts: {
      // --- example ---
      // 0: {_id:0,textContent:'hello',user:'marselena'}
      // 1: {_id:1,textContent:'bye',user:'lillian'}
    },
    selected: null,
  },
  reducers: {
    refresh: (state) => {
      // send a get request to the database for a list of all posts
      async function getPosts() {
        const response = await fetch('http://localhost:3000/api/posts'); // TODO: replace this endpoint with whatever the server team decides
        return await response.json();
      }
      const posts = getPosts();
      return { ...state, posts };
    },
    // Select a single post out of the display
    select: (state, action) => {
      // get id from payload and store it in state as selected
      const selected = ({ _id } = action.payload);
      return { ...state, selected };
    },
  },
});

export const { refresh } = postDisplaySlice.actions;

export default postDisplaySlice.reducer;
