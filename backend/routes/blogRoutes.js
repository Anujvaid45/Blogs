const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Create a new blog post
router.post('/', async (req, res) => {
  const blogPost = new BlogPost({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const savedBlogPost = await blogPost.save();
    res.json(savedBlogPost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
