const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
import { useDispatch } from 'react-redux';
import { logIn } from '../../client/slices/appSlice.js';

router.post('/signup', userController.createUser, (req, res) => {
  const dispatch = useDispatch();
  dispatch(logIn('testuser'));
  return res.status(200);
});

router.get('/signin', userController.verifyUser, (req, res) => {
  const dispatch = useDispatch();
  dispatch(logIn('testuser'));
  return res.status(200);
});

module.exports = router;
