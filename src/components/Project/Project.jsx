import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

const Project = ({ children, location: { pathname } }) => (
  <Container>
    <Sidebar pathname={pathname} />
    <Content>
      {children}
    </Content>
  </Container>
);

Project.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Project;
