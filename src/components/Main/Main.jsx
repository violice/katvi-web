import React from 'react';
import PropTypes from 'prop-types';

import { LoginModal, RegistrationModal } from './Modals';

const Main = ({ location: { pathname }, history: { replace } }) => (
  <>
    <LoginModal opened={pathname.includes('login')} onClose={() => replace('/')} />
    <RegistrationModal opened={pathname.includes('registration')} onClose={() => replace('/')} />
  </>
);

Main.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default React.memo(Main);
