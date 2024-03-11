import { createSlice } from '@reduxjs/toolkit';

export const postContainerSlice = createSlice({
  name: 'postContainer',
  initialState: {
    posts: [
      // --- example ---
      // {_id:0,textContent:'hello',user:'marselena'},
      // {_id:1,textContent:'bye',user:'lillian'}
    ],
    selected: null,
  },
  reducers: {
    // Refresh the list of all posts
    refresh: (state) => {
      // send a get request to the database for a list of all posts
      // async function getPosts() {
      //   const response = await fetch('http://localhost:3000/api/posts'); // TODO: replace this endpoint with whatever the server team decides
      //   return await response.json();
      // }
      // const posts = getPosts();
      // return { ...state, posts };
      fetch('http://localhost:3000/display_all_posts')
        .then((results) => {
          results.json();
        })
        .then((json) => {
          const posts = json;
          return { ...state, posts };
        })
        .catch((err) => console.log(err));
    },
    // Select a single post from the container
    select: (state, action) => {
      // get id from payload and store it in state as selected
      const selected = ({ _id } = action.payload);
      return { ...state, selected };
    },
  },
});

export const { refresh } = postContainerSlice.actions;

export default postContainerSlice.reducer;
