import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get('https://blogs-api1.onrender.com/blog').then((response) => {
      setBlogPosts(response.data);
    });
  }, []);

    return ( 
        <div>
            <h1>Blog Home</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
        </div>
     );
}
 
export default HomePage;