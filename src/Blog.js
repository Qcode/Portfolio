import React from 'react';
import allPosts from './posts';
import './Blog.css';
import Post from './Post';

function Blog() {
  return <div className="page-container">{allPosts.map(post => <Post post={post} />)}</div>;
}

export default Blog;
