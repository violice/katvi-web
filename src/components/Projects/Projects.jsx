import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Common';

import { ProjectCard } from './ProjectCard';
import { AddProject } from './AddProject';
import { Container, Header, Content } from './styles';

const Projects = ({
  projects, loading, addProject, push,
}) => {
  const [opened, setOpened] = useState(false);

  const AddProjectProps = {
    opened,
    loading,
    addProject,
    onClose: () => setOpened(false),
  };

  return (
    <Container>
      <Header>
        Проекты
        <Button onClick={() => setOpened(true)}>Добавить проект</Button>
      </Header>
      <Content>
        {projects.map(project => (<ProjectCard key={project.id} project={project} push={push} />))}
      </Content>
      <AddProject {...AddProjectProps} />
    </Container>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  addProject: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default Projects;
