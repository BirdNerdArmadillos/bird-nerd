import React from 'react';
import CreateNewPost from './CreateNewPost';
import PostContainer from './PostContainer';

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
