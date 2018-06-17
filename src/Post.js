import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { NavLink } from 'react-router-dom';

function Post(props) {
  const date = new Date(props.post.date * 1000);
  return (
    <div className="blog-entry">
      <h1>
        <NavLink to={`/blog/${props.post.slug}`}>{props.post.title}</NavLink>
      </h1>
      <Markdown source={props.post.post} escapeHtml={false} />
      <p className="blog-post-date">
        <NavLink to={`/blog/${props.post.slug}`}>{date.toDateString()}</NavLink>
      </p>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.number,
    post: PropTypes.string,
  }).isRequired,
};

export default Post;
