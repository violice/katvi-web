import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Modal, Input, Button } from 'components/Common';

import { Container, Header } from './styles';

const LoginModal = ({ opened, onClose }) => (
  <Modal opened={opened} onClose={onClose}>
    <Container>
      <Header>Log In to katvi</Header>
      <Link to="/registration">or create an account</Link>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button>Log In</Button>
    </Container>
  </Modal>
);

LoginModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(LoginModal);
