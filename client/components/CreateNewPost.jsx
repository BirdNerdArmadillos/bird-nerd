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
  const createNewPostState = useSelector((state) => state.createNewPost);

  const handleClientInput = (actionCreator, value) => {
    dispatch(actionCreator(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newpost', {
        method: 'POST',
        header: {
          'Content Type': 'application/json',
        },
        body: JSON.stringify(createNewPostState),
      });
      if (!response.ok) {
        throw new Error('Failed to create new post');
      }
    } catch {}
  };

  return (
    <>
      <div className='textarea'>
        <textarea
          className='textarea-box'
          value={createNewPostState.body}
          onChange={(e) => handleClientInput(updateBody, e.target.value)}
        />
      </div>
      <div className='species'>
        <input
          className='species-box'
          type='text'
          placeholder='Name of the bird / Species'
          value={createNewPostState.nameOfBird}
          onChange={(e) => handleClientInput(updateNameOfBird, e.target.value)}
        />
      </div>
      <div className='location'>
        <input
          className='location-box'
          type='text'
          placeholder='Where did you see this bird?'
          value={createNewPostState.location}
          onChange={(e) => handleClientInput(updateLocation, e.target.value)}
        />
      </div>
      <div className='weather'>
        <input
          className='weather-box'
          type='text'
          placeholder='What wsa the weather like?'
          value={createNewPostState.weather}
          onChange={(e) => handleClientInput(updateWeather, e.target.value)}
        />
      </div>
      <div className='date'>
        <input
          className='date-box'
          type='text'
          placeholder='Date'
          value={createNewPostState.date}
          onChange={(e) => handleClientInput(updateDate, e.target.value)}
        />
      </div>
      <div className='time'>
        <input
          className='time-box'
          type='text'
          placeholder='Time'
          value={createNewPostState.time}
          onChange={(e) => handleClientInput(updateTime, e.target.value)}
        />
      </div>
      <button>Create Post</button>
    </>
  );
};

export default CreateNewPost;
