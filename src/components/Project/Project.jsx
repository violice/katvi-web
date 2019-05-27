import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';
import { Settings } from './Settings';

import { Container, Content } from './styles';

const Project = ({
  children,
  ...SidebarProps
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <Container>
      <Sidebar
        {...SidebarProps}
        openSettings={() => setOpened(true)}
      />
      <Content>
        {children}
      </Content>
      <Settings
        opened={opened}
        onClose={() => setOpened(false)}
      />
    </Container>
  );
};

Project.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired,
  boards: PropTypes.array.isRequired,
  board: PropTypes.object.isRequired,
  onBoardChange: PropTypes.func.isRequired,
};

export default Project;
