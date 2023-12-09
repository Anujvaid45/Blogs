const express = require('express');
const router = express.Router();
const {requireSignIn} = require('../middleware/authMiddleware.js');
const BlogPost = require('../models/blogPost');

// Get all blog posts
router.get('/',requireSignIn, async (req, res) => {
  try {
    const user_id = req.user._id
    const blogPosts = await BlogPost.find({ user_id });
    res.json(blogPosts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Create a new blog post
router.post('/',requireSignIn, async (req, res) => {
  const blogPost = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    user_id: req.user._id,
  });

  try {
    const savedBlogPost = await blogPost.save();
    res.json(savedBlogPost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
