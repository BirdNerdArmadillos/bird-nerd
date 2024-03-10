import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateBody,
  updateNameOfBird,
  updateLocation,
  updateWeather,
  updateDate,
  updateTime,
} from '../slices/createNewPostSlice';

const CreateNewPost = () => {
  const dispatch = useDispatch();
  // Access the current form state
  const createNewPostState = useSelector((state) => state.createNewPost);

  const handleClientInput = (actionCreator, value) => {
    dispatch(actionCreator(value));
  };

  return (
    <>
      <div>
        <textarea
          value={createNewPostState.body}
          onChange={(e) => handleClientInput(updateBody, e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Name of the bird / Species"
          value={createNewPostState.nameOfBird}
          onChange={(e) => handleClientInput(updateNameOfBird, e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Where did you see this bird?"
          value={createNewPostState.location}
          onChange={(e) => handleClientInput(updateLocation, e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="What wsa the weather like?"
          value={createNewPostState.weather}
          onChange={(e) => handleClientInput(updateWeather, e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Date"
          value={createNewPostState.date}
          onChange={(e) => handleClientInput(updateDate, e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Time"
          value={createNewPostState.time}
          onChange={(e) => handleClientInput(updateTime, e.target.value)}
        />
      </div>
      <button>Create Post</button>
    </>
  );
};

export default CreateNewPost;
