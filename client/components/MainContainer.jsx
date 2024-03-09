import React from 'react';
import CreateNewPost from './CreateNewPost.jsx';
import PostContainer from './PostContainer.jsx';

const MainContainer = () => {
  return (
    <div>
      <CreateNewPost />
      <PostContainer />
      {/* <CommentsContainer/> */}
    </div>
  );
};

export default MainContainer;
