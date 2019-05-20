import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Modal, Button, Input, TextArea,
} from 'components/Common';

import { Container, Footer } from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  description: Yup.string(),
  boardName: Yup.string().required('Please enter a board name'),
  boardDescription: Yup.string(),
});

const AddProject = ({
  opened, loading, createProject, onClose,
}) => (
  <Formik
    validationSchema={validationSchema}
    initialValues={{
      name: 'New Project',
      description: '',
      boardName: 'Default Board',
      boardDescription: '',
    }}
    onSubmit={createProject}
    render={({ submitForm }) => (
      <Modal
        header="Add Project"
        footer={(
          <Footer>
            <Button
              color="#000000"
              background="#dadada"
              size="small"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              color="#7D4CDB"
              background="#6FFFB0"
              size="small"
              loading={loading}
              onClick={submitForm}
            >
              Add
            </Button>
          </Footer>
          )}
        opened={opened}
        onClose={onClose}
      >
        <Container>
          <Form>
            <Field size="small" name="name" placeholder="Name" component={Input} />
            <Field size="small" rows={5} name="description" placeholder="Description" component={TextArea} />
            <Field size="small" name="boardName" placeholder="Board Name" component={Input} />
            <Field size="small" rows={5} name="boardDescription" placeholder="Board Description" component={TextArea} />
          </Form>
        </Container>
      </Modal>
    )}
  />


);

AddProject.propTypes = {
  opened: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  createProject: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddProject;
