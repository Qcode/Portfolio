import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Markdown from 'react-markdown';
import bigheadProject from './projects/Bighead';
import idiotPuzzlesProject from './projects/IdiotPuzzles';
import dimensionautProject from './projects/Dimensionaut';
import threeDTetrisProject from './projects/3DTetris';
import jumpAndShootProject from './projects/JumpAndShoot';
import mari0OnlineModProject from './projects/Mari0OnlineMod';
import gtaVIProject from './projects/GTAVI';
import eeProject from './projects/EE';
import './ProjectDetails.css';

const downloadsBaseUrl = 'https://rossevansgames.com/Downloads/';

const ProjectMap = {
  bighead: bigheadProject,
  'idiot-puzzles': idiotPuzzlesProject,
  dimensionaut: dimensionautProject,
  '3d-tetris': threeDTetrisProject,
  'jump-and-shoot': jumpAndShootProject,
  'mari0-online-mod': mari0OnlineModProject,
  'gta-vi': gtaVIProject,
  'extended-essay': eeProject,
};

function ProjectDetails(props) {
  const project = ProjectMap[props.match.params.project];
  if (!project) {
    return (
      <div className="page-container">
        <h1>404</h1>
      </div>
    );
  }
  const currentTab = props.match.params.projectTab
    ? props.match.params.projectTab.toLowerCase()
    : project.defaultTab;

  return (
    <div className="page-container project-container">
      <h1>{project.title}</h1>
      <div className="project-tab-container">
        {project.tabs.map(string => (
          <NavLink
            className="project-tab-link"
            to={`/projects/${props.match.params.project}/${string.toLowerCase()}`}
          >
            <p
              className={
                currentTab.toLowerCase() === string.toLowerCase()
                  ? 'project-tab project-tab__selected'
                  : 'project-tab'
              }
            >
              {string}
            </p>
          </NavLink>
        ))}
      </div>
      <Markdown className="project-body" source={project[currentTab]} escapeHtml={false} />
      {project.downloads && <h2>Downloads</h2>}
      <div className="project-downloads-container">
        {project.downloads &&
          Object.entries(project.downloads).map(value => (
            <a href={`${downloadsBaseUrl}${value[1]}`}>
              <p>{value[0]}</p>
            </a>
          ))}
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ project: PropTypes.string, projectTab: PropTypes.string }),
  }),
};

ProjectDetails.defaultProps = {
  match: { params: { project: '', projectTab: PropTypes.string } },
};

export default ProjectDetails;
