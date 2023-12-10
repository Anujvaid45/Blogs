import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Home.css";
import { useAuth } from '../context/auth';
import Layout from '../Layout/Layout';

const HomePage = () => {

    const [blogPosts, setBlogPosts] = useState([]);
    console.log(blogPosts)
    const { auth } = useAuth();

    console.log('Auth:', auth);
    useEffect(() => {
      const fetchUserBlogs = async () => {
        try {
          if (auth) {
            const response = await axios.get('https://blogs-api1.onrender.com/blog');
            setBlogPosts(response.data);
          }
        } catch (error) {
          console.error('Error fetching user blogs:', error);
        }
      };
  
      fetchUserBlogs();
    }, [auth]);
    return (
      <Layout title={'Home'}>
        <div className="home-container">
       <h1>Your Latest Blog Posts</h1>
       { blogPosts.length > 0 ? (
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




