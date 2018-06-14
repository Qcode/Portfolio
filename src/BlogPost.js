import React from 'react';
import PropTypes from 'prop-types';
import allPosts from './posts';
import Post from './Post';

function BlogPost(props) {
  const thePost = allPosts.find(post => post.slug === props.match.params.blogSlug);

  return (
    <div className="page-container">
      <Post post={thePost} />
    </div>
  );
}

BlogPost.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ blogSlug: PropTypes.string }) }).isRequired,
};

export default BlogPost;
