const mongoose = require('mongoose');
// const path = require('path');
require('dotenv').config();
// console.log(process.env.PASSWORD);

const URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.jbbfxwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(URI);

mongoose.connect(URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'birdnerd',
})
  .then(() => console.log('Connected to Mongo DB.'))
	.catch((err) => console.log(err));


const Schema = mongoose.Schema;

// user schema;
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// comment schema;
const commentSchema = new Schema({
  // username: { type: String, required: true }, 
  username_id: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	},
  comment: String
});

// user schema;
const postSchema = new Schema({
  username: { type: String, required: true },
  // username_id: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'user',
	// },
  // password: { type: String, required: true },
  textContent: String,
  birdName: String,
  dateStamp: String,
  location: String,
  weatherConditions: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
});



const User = mongoose.model('user', userSchema);
const Comment = mongoose.model('comment', commentSchema);
const Post = mongoose.model('post', postSchema);

// exports all the models
module.exports = {
	User,
  Comment,
  Post
};
