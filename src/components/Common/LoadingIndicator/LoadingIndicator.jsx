import React from 'react';
import PropTypes from 'prop-types';

import { Container, Circle } from './styles';

const LoadingIndicator = ({ size }) => (
  <Container size={size}>
    <Circle size={size} />
    <Circle size={size} />
  </Container>
);

LoadingIndicator.propTypes = {
  size: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  size: '64px',
};

export default LoadingIndicator;
