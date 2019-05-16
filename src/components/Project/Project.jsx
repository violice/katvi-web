import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

const Project = ({
  children,
  pathname,
  projects,
  project,
}) => (
  <Container>
    <Sidebar
      pathname={pathname}
      projects={projects}
      project={project}
    />
    <Content>
      {children}
    </Content>
  </Container>
);

Project.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired,
};

export default Project;
