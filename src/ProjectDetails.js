import React from 'react';
import PropTypes from 'prop-types';

const ProjectMap = {
  bighead: <h1>Bighead</h1>,
  'idiot-puzzles': <h1>Idiot Puzzles</h1>,
  dimensionaut: <h1>Dimensionaut</h1>,
  '3d-tetris': <h1>3d Tetris</h1>,
  'jump-and-shoot': <h1>Jump and Shoot</h1>,
  'mari0-online-mod': <h1>Mari0 Online Mod</h1>,
  'gta-vi': <h1>GTA VI</h1>,
  'extended-essay': <h1>Extended Essay</h1>,
};

function ProjectDetails(props) {
  if (ProjectMap[props.match.params.project]) {
    return ProjectMap[props.match.params.project];
  }
  return <h1>404 - Project Not Found</h1>;
}

ProjectDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ project: PropTypes.string }) }),
};

ProjectDetails.defaultProps = {
  match: { params: { project: '' } },
};

export default ProjectDetails;
