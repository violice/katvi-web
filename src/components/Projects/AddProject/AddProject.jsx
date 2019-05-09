import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal, Button, Input, TextArea,
} from 'components/Common';

import { Container, Footer } from './styles';

const AddProject = ({ opened, onClose }) => (
  <Modal
    header="Add Project"
    footer={(
      <Footer>
        <Button>Add</Button>
      </Footer>
    )}
    opened={opened}
    onClose={onClose}
  >
    <Container>
      <Input placeholder="Name" />
      <TextArea placeholder="Description" rows="5" />
      <Input placeholder="Board Name" />
      <TextArea placeholder="Board Description" rows="5" />
    </Container>
  </Modal>
);

AddProject.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddProject;
