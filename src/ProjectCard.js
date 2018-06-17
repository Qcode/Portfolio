import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <NavLink className="project-card" to={`/projects/${props.slug}`}>
      <img alt={`${props.title} project`} src={props.imgSrc} className="project-card-image" />
      <p className="project-card-title">{props.title}</p>
    </NavLink>
  );
}

ProjectCard.propTypes = {
  slug: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;
