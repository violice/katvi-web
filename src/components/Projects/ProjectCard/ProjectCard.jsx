import React from 'react';
import PropTypes from 'prop-types';
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

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
