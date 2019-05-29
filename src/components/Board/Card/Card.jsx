import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Card = ({ card }) => (
  <Container>
    {card.name}
  </Container>
);

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
