import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Modal, Input, Button } from 'components/Common';

import { Container, Header } from './styles';

const RegistrationModal = ({ opened, onClose }) => (
  <Modal opened={opened} onClose={onClose}>
    <Container>
      <Header>Sign Up to katvi</Header>
      <Link to="/login">or log in existing account</Link>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button>Sign Up</Button>
    </Container>
  </Modal>
);

RegistrationModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(RegistrationModal);
