import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import '../styles/BlogForm.css';
import Layout from '../Layout/Layout';
const BlogForms = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate()
  
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
        setTimeout(()=>{navigate('/')},2000)
      })
      .catch((error) => {
        console.error('Error creating blog post:', error);
        // Handle error, display error message, etc.
      });
    };
  
    return (
      <Layout title={'Create'}>
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
      </Layout>
    );
}
 
export default BlogForms;