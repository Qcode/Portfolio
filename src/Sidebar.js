import React from 'react';
import { NavLink } from 'react-router-dom';
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
    </div>
  );
}

export default Sidebar;
