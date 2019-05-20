import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Content,
} from './styles';

const ProjectSettings = ({ project }) => (
  <Container>
    <Header>
      {`Settings for ${project.name}`}
    </Header>
    <Content>
      Content
    </Content>
  </Container>
);

ProjectSettings.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectSettings;
