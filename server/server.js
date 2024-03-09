const express = require('express');
const path = require('path');
const {User, Comment, Post} = require('./modelDB');

// const userController = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


// post req to create username and password; SIGN UP
// get req to find username and password in db and match it; SIGN IN
// get req to find username and send it to client;
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  User.create({username, password})
    .then((data) => {
      res.locals = data;
      return res.status(200).json(res.locals);
    })
    .catch((err) => {
      console.log(err);
    })
})





// global error handler;
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });


app.listen(PORT, console.log(`Server listening on port ${PORT}`));
