import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Home.css";
import { useAuth } from '../context/auth';
import Layout from '../Layout/Layout';

const HomePage = () => {

    const [blogPosts, setBlogPosts] = useState([]);
    console.log(blogPosts)
    const { user } = useAuth();

  useEffect(() => {
    axios.get('https://blogs-api1.onrender.com/blog').then((response) => {
      setBlogPosts(response.data);
    });
  }, []);

    return (
      <Layout title={'Home'}>
        <div className="home-container">
        <h1>Latest Blog Posts</h1>
        {blogPosts.map((post) => (
          <div key={post._id} className="blog-post">
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-content">{post.content}</p>
          </div>
        ))}
      </div>
      </Layout>
     );
}
 
export default HomePage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../styles/Home.css";
// import { useAuth } from '../context/auth';
// import Layout from '../Layout/Layout';

// const HomePage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     axios.get('https://blogs-api1.onrender.com/blog')
//       .then((response) => {
//         setBlogPosts(response.data);
//       });
//   }, []);

//   return (
//     <Layout title={'Home'}>
//       <div className="home-container">
//         <h1>Latest Blog Posts</h1>
//         {blogPosts.map((post) => (
//           // Check if the user_id of the post matches the user's id
//           post && post.user_id === user._id && (
//             <div key={post._id} className="blog-post">
//               <h2 className="blog-title">{post.title}</h2>
//               <p className="blog-content">{post.content}</p>
//             </div>
//           )
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;


// ExampleComponent.js
// import React from 'react';
// import { useBlogContext } from '../context/blogContext';
// import Layout from '../Layout/Layout';

// const HomePage = () => {
//   const { blogPosts, loading } = useBlogContext();
//   console.log(blogPosts.length);
//   return (
//     <Layout>
//     <div className="home-container">
//       <h1>Your Latest Blog Posts</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : blogPosts.length > 0 ? (
//         <div>
//           {blogPosts.map(blog => (
//             <div key={blog._id} className="blog-post">
//               <h2 className="blog-title">{blog.title}</h2>
//               <p className="blog-content">{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>You haven't written any blogs yet.</p>
//       )}
//     </div>
//     </Layout>
//   );
// };

// export default HomePage;



