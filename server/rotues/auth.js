const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200);
});

router.get('/signin', userController.verifyUser, (req, res) => {
  return res.status(200);
});

module.exports = router;
