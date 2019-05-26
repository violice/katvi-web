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
      name: 'Новый проект',
      description: '',
      boardName: 'Стандартная доска',
      boardDescription: '',
    }}
    onSubmit={createProject}
    render={({ submitForm }) => (
      <Modal
        header="Добавить проект"
        footer={(
          <Footer>
            <Button
              color="#000000"
              background="#dadada"
              size="small"
              onClick={onClose}
            >
              Закрыть
            </Button>
            <Button
              color="#7D4CDB"
              background="#6FFFB0"
              size="small"
              loading={loading}
              onClick={submitForm}
            >
              Добавить
            </Button>
          </Footer>
          )}
        opened={opened}
        onClose={onClose}
      >
        <Container>
          <Form>
            <Field size="small" name="name" placeholder="Название проекта" component={Input} />
            <Field size="small" rows={5} name="description" placeholder="Описание проекта" component={TextArea} />
            <Field size="small" name="boardName" placeholder="Название доски" component={Input} />
            <Field size="small" rows={5} name="boardDescription" placeholder="Описание доски" component={TextArea} />
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
