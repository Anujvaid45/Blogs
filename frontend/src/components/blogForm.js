// client/src/components/BlogForm.js
import React, { useState } from 'react';
import axios from 'axios';

const blogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlogPost = {
      title,
      content,
    };

    axios.post('https://blogs-api1.onrender.com/blog', newBlogPost).then((response) => {
      console.log(response.data);
      // Optionally, redirect to the home page or display a success message
    });
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default blogForm