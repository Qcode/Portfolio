import React from 'react';
import ProjectCard from './ProjectCard';
import secretHitlerImage from './assets/project-cards/secrethitler.png';
import extendedEssayCardImage from './assets/project-cards/EE.png';
import gtaVIImage from './assets/project-cards/gtavi.png';
import mari0Image from './assets/project-cards/mari0.png';
import jumpAndShootImage from './assets/project-cards/jumpnshoot.png';
import threeDTetrisImage from './assets/project-cards/3dtetris.png';
import dimensionautImage from './assets/project-cards/dimensionaut.png';
import idiotPuzzlesImage from './assets/project-cards/idiotpuzzles.png';
import bigheadCardImage from './assets/project-cards/bighead.png';

import './Projects.css';

const projectMap = [
  {
    imgSrc: secretHitlerImage,
    slug: 'secret-hitler',
    title: 'Secret Hitler',
  },
  {
    imgSrc: extendedEssayCardImage,
    slug: 'extended-essay',
    title: 'Extended Essay',
  },
  {
    imgSrc: gtaVIImage,
    slug: 'gta-vi',
    title: 'GTA VI',
  },
  {
    imgSrc: mari0Image,
    slug: 'mari0-online-mod',
    title: 'Mari0 Online Mod',
  },
  {
    imgSrc: jumpAndShootImage,
    slug: 'jump-and-shoot',
    title: 'Jump and Shoot',
  },
  {
    imgSrc: threeDTetrisImage,
    slug: '3d-tetris',
    title: '3D Tetris',
  },
  {
    imgSrc: dimensionautImage,
    slug: 'dimensionaut',
    title: 'Dimensionaut',
  },
  {
    imgSrc: idiotPuzzlesImage,
    slug: 'idiot-puzzles',
    title: 'Idiot Puzzles',
  },
  {
    imgSrc: bigheadCardImage,
    slug: 'bighead',
    title: 'Bighead',
  },
];

function Projects() {
  return (
    <div className="page-container project-page">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectMap.map(project => (
          <ProjectCard imgSrc={project.imgSrc} slug={project.slug} title={project.title} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
