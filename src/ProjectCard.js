import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <NavLink className="project-card" to={`/projects/${props.slug}`}>
      <img src={props.imgSrc} className="project-card-image" />
      <p className="project-card-title">{props.title}</p>
    </NavLink>
  );
}

export default ProjectCard;
