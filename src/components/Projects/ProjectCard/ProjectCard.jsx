import React from 'react';
import PropTypes from 'prop-types';
import { AccountCircle } from 'rmdi';

import {
  Container, Top, Thumb, Text, Header, Description, Bottom,
} from './styles';

const renderAuthor = ({
  firstName, lastName, username, email,
}) => {
  if (firstName && lastName) return `${firstName} ${lastName}`;
  return username || email;
};

const ProjectCard = ({
  project: {
    id, name, description, user,
  },
  push,
}) => (
  <Container>
    <Top onClick={() => push(`/secure/projects/${id}`)}>
      <Thumb>{name.split(' ').slice(0, 2).map(word => word[0].toUpperCase()).join('')}</Thumb>
      <Text>
        <Header>{name}</Header>
        <Description>
          {description}
        </Description>
      </Text>
    </Top>
    <Bottom onClick={() => {
      console.log('user');
    }}
    >
      <AccountCircle />
      {renderAuthor(user)}
    </Bottom>
  </Container>
);

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

export default ProjectCard;
