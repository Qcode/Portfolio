import React from 'react';
import { NavLink } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        <NavLink to="/projects/bighead">Bighead</NavLink>
      </p>
      <p>
        <NavLink to="/projects/idiot-puzzles">Idiot Puzzles</NavLink>
      </p>
      <p>
        <NavLink to="/projects/dimensionaut">Dimensionaut</NavLink>
      </p>
      <p>
        <NavLink to="/projects/3d-tetris">3d Tetris</NavLink>
      </p>
      <p>
        <NavLink to="/projects/jump-and-shoot">Jump and Shoot</NavLink>
      </p>
      <p>
        <NavLink to="/projects/mari0-online-mod">Mari0 Online Mod</NavLink>
      </p>
      <p>
        <NavLink to="/projects/gta-vi">GTA VI</NavLink>
      </p>
      <p>
        <NavLink to="/projects/extended-essay">Extended Essay</NavLink>
      </p>
    </div>
  );
}

export default Projects;
