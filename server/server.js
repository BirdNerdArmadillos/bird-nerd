const express = require('express');
const path = require('path');
const { User, Comment, Post } = require('./modelDB');

// const userController = require('./controllers/userController');
const postController = require('./postController');

const app = express();
const PORT = 3000;

const authRouter = require('./rotues/auth');

app.use(express.json());
app.use(express.urlencoded());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

app.use('/auth', authRouter);
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

// display all posts;
app.get('/display_all_posts', postController.displayAllPosts, (req,res) => {
  res.status(200).json(res.locals.data);
})


// post request to /post to create a new post;
app.post('/newpost', postController.createNewPost, (req, res) => {
  return res.status(201).json(res.locals);
});

// edit the post;
app.patch('/post', postController.editPost, (req, res) => {
  return res.status(201).json(res.locals.data);
});

// add a comment to an existing post
app.post('/comment', postController.addComment, (req, res) => {
  return res.status(201).json(res.locals.comment);
});

// global error handler;
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
