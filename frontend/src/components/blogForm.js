import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BlogForm.css';
const BlogForm = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newBlogPost = {
        title,
        content,
      };
  
      axios.post('https://blogs-api1.onrender.com/blog', newBlogPost)
      .then((response) => {
        console.log(response.data);
        setSuccessMessage('Blog post created successfully!');
        // Redirect to the home page after a brief delay
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
      })
      .catch((error) => {
        console.error('Error creating blog post:', error);
        // Handle error, display error message, etc.
      });
    };
  
    return (
        <div className="blog-form-container">
        <h1>Create a New Blog Post</h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
          />
  
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog post here"
          />
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
 
export default BlogForm;



