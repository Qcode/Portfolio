import React from 'react';
import { NavLink } from 'react-router-dom';
import githubImage from './assets/github.png';
import youtubeImage from './assets/youtube.png';
import linkedInImage from './assets/linkedin.png';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Ross Evans</h1>
      <h2 className="sidebar-link">
        <NavLink to="/blog">Blog</NavLink>
      </h2>
      <h2 className="sidebar-link">
        <NavLink to="/about">About</NavLink>
      </h2>
      <h2 className="sidebar-link">
        <NavLink to="/projects">Projects</NavLink>
      </h2>
      <a href="https://github.com/Qcode">
        <img alt="GitHub Logo" className="sidebar-image" src={githubImage} />
      </a>
      <a href="https://www.youtube.com/user/thatQcode">
        <img alt="YouTube logo" className="sidebar-image" src={youtubeImage} />
      </a>
      <a href="https://www.linkedin.com/in/ross-evans-6a6218156/">
        <img
          alt="LinkedIn logo"
          className="sidebar-image sidebar-linkedin-image"
          src={linkedInImage}
        />
      </a>
    </div>
  );
}

export default Sidebar;
