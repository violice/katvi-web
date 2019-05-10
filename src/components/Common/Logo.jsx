import React from 'react';
import PropTypes from 'prop-types';

import logoInverted from 'images/logoInverted.svg';
import logoShort from 'images/logoShort.svg';
import logo from 'images/logo.svg';

const getSrc = (type) => {
  switch (type) {
    case 'inverted':
      return logoInverted;
    case 'short':
      return logoShort;
    default:
      return logo;
  }
};

const Logo = ({ type, size: { width, height } }) => (
  <img
    width={width}
    height={height}
    src={getSrc(type)}
    alt="katvi"
  />
);

Logo.propTypes = {
  type: PropTypes.oneOf(['default', 'inverted', 'short']),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

Logo.defaultProps = {
  type: 'default',
  size: {
    width: '120px',
    height: '35px',
  },
};

export { Logo };
