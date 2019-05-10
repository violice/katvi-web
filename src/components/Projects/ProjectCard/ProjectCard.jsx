import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container, Top, Thumb, Text, Header, Description, Bottom,
} from './styles';

const ProjectCard = () => (
  <Link to="/secure/projects/1">
    <Container>
      <Top>
        <Thumb>P</Thumb>
        <Text>
          <Header>Project 1</Header>
          <Description>
            The description of super
            amazing project
          </Description>
        </Text>
      </Top>
      <Bottom />
    </Container>
  </Link>
);

export default ProjectCard;
