import React from 'react';
import PropTypes from 'prop-types';

import { LoadingIndicator } from 'components/Common';

import { BaseButton } from './styles';

const Button = ({ loading, children, ...props }) => (
  <BaseButton {...props}>
    {loading && <LoadingIndicator size="32px" />}
    {children}
  </BaseButton>
);

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(['medium', 'small']),
  color: PropTypes.string,
  background: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  children: null,
  size: 'medium',
  color: '#ffffff',
  background: '#7D4CDB',
};

export default Button;
