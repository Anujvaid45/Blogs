const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users', // Make sure it matches the model name used in mongoose.model() for the User model
  // },
  user_id: {
    type: String,
    required: true,
  },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
