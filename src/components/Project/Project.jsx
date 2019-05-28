import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';

import { Container, Content } from './styles';

const Project = ({
  children,
  ...SidebarProps
}) => (
  <Container>
    <Sidebar
      {...SidebarProps}
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
  board: PropTypes.object.isRequired,
  onBoardChange: PropTypes.func.isRequired,
};

export default Project;
