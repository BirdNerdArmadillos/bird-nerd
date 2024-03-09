import React from 'react';
import Post from './Post.jsx';
// import { refresh } from '../slices/postContainerSlice.js';
import { useSelector } from 'react-redux';

const PostContainer = () => {
  const posts = useSelector((state) => state.postContainer.posts);

  const componentsArray = [];
  posts.forEach((post, i) => {
    componentsArray.push(
      <Post
        key={post._id}
        user={post.user}
        textContent={post.textContent}
        datetime={post.datetime}
        // TODO: add more props as necessary
      />
    );
  });

  return <section>{componentsArray}</section>;
};

export default PostContainer;
