// import React from 'react';

// const Post = (props) => {
//   return <div onClick={}>{props.textContent}</div>;
// };

// // TODO
// create handle-post logic

// export default Post;

import React from 'react';
import { useDispatch } from 'react-redux';
import { setActivePost } from '../slices/contentContainerSlice';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActivePost(post));
  };
  return (
    <div className="post" onClick={handleClick}>
      <h2>{post.user}</h2>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
