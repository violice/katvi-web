import React from 'react';

import {
  Container, Top, Image, Text, Header, Description, Bottom,
} from './styles';

const ProjectCard = () => (
  <Container>
    <Top>
      <Image />
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
);

export default ProjectCard;
