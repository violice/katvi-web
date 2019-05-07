import React from 'react';
import PropTypes from 'prop-types';

import logo from 'images/logo.svg';
import logoWhite from 'images/logoWhite.svg';

const Logo = ({ inverted }) => (<img width="120px" height="35px" src={inverted ? logoWhite : logo} alt="katvi" />);

Logo.propTypes = {
  inverted: PropTypes.bool,
};

Logo.defaultProps = {
  inverted: false,
};

export { Logo };
