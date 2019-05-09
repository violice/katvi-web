import React, { useState } from 'react';

import { Button } from 'components/Common';

import { ProjectCard } from './ProjectCard';
import { AddProject } from './AddProject';
import { Container, Header, Content } from './styles';

const Projects = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Container>
      <Header>
        Projects
        <Button onClick={() => setOpened(true)}>Add Project</Button>
      </Header>
      <Content>
        <ProjectCard />
      </Content>
      <AddProject opened={opened} onClose={() => setOpened(false)} />
    </Container>
  );
};

export default Projects;
