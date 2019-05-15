import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, Top, Thumb, Text, Header, Description, Bottom,
} from './styles';

const ProjectCard = ({ project: { id, name, description } }) => (
  <Link to={`/secure/projects/${id}`}>
    <Container>
      <Top>
        <Thumb>{name.split(' ').map(word => word[0].toUpperCase()).join(' ')}</Thumb>
        <Text>
          <Header>{name}</Header>
          <Description>
            {description}
          </Description>
        </Text>
      </Top>
      <Bottom />
    </Container>
  </Link>
);

export default ProjectCard;
