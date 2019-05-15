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
};

Button.defaultProps = {
  loading: false,
  children: null,
};

export default Button;
