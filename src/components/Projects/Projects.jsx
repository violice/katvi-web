import React from 'react';

import { Button } from 'components/Common';

import { ProjectCard } from './ProjectCard';
import { Container, Header, Content } from './styles';

const Projects = () => (
  <Container>
    <Header>
      Projects
      <Button>Add Project</Button>
    </Header>
    <Content>
      <ProjectCard />
    </Content>
  </Container>
);

export default Projects;
