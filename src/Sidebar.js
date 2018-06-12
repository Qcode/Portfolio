import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Ross Evans</h1>
      <h2 className="sidebar-link">
        <a href="#blog">Blog</a>
      </h2>
      <h2 className="sidebar-link">
        <a href="#about">About</a>
      </h2>
      <h2 className="sidebar-link">
        <a href="#projects">Projects</a>
      </h2>
    </div>
  );
}

export default Sidebar;
