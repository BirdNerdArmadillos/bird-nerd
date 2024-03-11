const User = require('../modelDB');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'Missing username or password in userController',
      status: 400,
      message: { err: 'An error occurred' },
    });
  }
  User.create({ username, password })
    .then((data) => {
      res.locals.username = data.username;
      next();
    })
    .catch((err) => {
      return next({
        log: 'Error occurred in create user',
        status: 500,
        message: { err: 'An error occurred' },
      });
    });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'Missing username or password in userController',
      status: 400,
      message: { err: 'An error occurred' },
    });
  }
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next({
        log: 'Error occurred in create user',
        status: 500,
        message: { err: 'An error occurred' },
      });
    } else if (!user) {
      res.redirect('/signup');
    } else {
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          res.redirect('/signup');
        } else {
          res.locals.username = username;
          return next();
        }
      });
    }
  });
};

module.exports = userController;
