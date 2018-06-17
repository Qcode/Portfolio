import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import extendedEssayCardImage from './assets/project-cards/EE.png';
import gtaVIImage from './assets/project-cards/gtavi.png';
import mari0Image from './assets/project-cards/mari0.png';
import jumpAndShootImage from './assets/project-cards/jumpnshoot.png';
import threeDTetrisImage from './assets/project-cards/3dtetris.png';
import dimensionautImage from './assets/project-cards/dimensionaut.png';
import idiotPuzzlesImage from './assets/project-cards/idiotpuzzles.png';
import bigheadCardImage from './assets/project-cards/bighead.png';

import './Projects.css';

function Projects() {
  return (
    <div className="page-container project-page">
      <h1>Projects</h1>
      <div className="projects-container">
        <ProjectCard imgSrc={extendedEssayCardImage} slug="extended-essay" title="Extended Essay" />
        <ProjectCard imgSrc={gtaVIImage} slug="gta-vi" title="GTA VI" />
        <ProjectCard imgSrc={mari0Image} slug="mari0-online-mod" title="Mari0 Online Mod" />
        <ProjectCard imgSrc={jumpAndShootImage} slug="jump-and-shoot" title="Jump and Shoot" />
        <ProjectCard imgSrc={threeDTetrisImage} slug="3d-tetris" title="3D Tetris" />
        <ProjectCard imgSrc={dimensionautImage} slug="dimensionaut" title="Dimensionaut" />
        <ProjectCard imgSrc={idiotPuzzlesImage} slug="idiot-puzzles" title="Idiot Puzzles" />
        <ProjectCard imgSrc={bigheadCardImage} slug="bighead" title="Bighead" />
      </div>
    </div>
  );
}

export default Projects;
