import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Home.css";
import { useAuth } from '../context/auth';
import Layout from '../Layout/Layout';

const HomePage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const { user } = useAuth();

  useEffect(() => {
    if(user)
    {
      axios.get('https://blogs-api1.onrender.com/blog')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching user blogs:', error);
      });
      
    }
    
  }, [user]);

    return ( 
      <Layout title={'Home'}>
      <div className="home-container">
      <h1>Your Latest Blog Posts</h1>
      {blogPosts.length > 0 ? (
        <div>
          {blogPosts.map(blog => (
            <div key={blog._id} className="blog-post">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-content">{blog.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven't written any blogs yet.</p>
      )}
    </div>
    </Layout>
     );
}
 
export default HomePage;