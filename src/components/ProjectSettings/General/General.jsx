import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Button, Input, TextArea,
} from 'components/Common';

import { Container } from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Пожалуйста введите название'),
  description: Yup.string(),
});

const General = ({ project: { name, description }, loading, editProject }) => (
  <Container>
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name,
        description,
      }}
      onSubmit={editProject}
    >
      <Form>
        <Field size="small" name="name" placeholder="Название проекта" component={Input} />
        <Field size="small" rows={5} name="description" placeholder="Описание проекта" component={TextArea} />
        <Button
          color="#7D4CDB"
          background="#6FFFB0"
          size="small"
          loading={loading}
        >
          Применить
        </Button>
      </Form>
    </Formik>
  </Container>
);

General.propTypes = {
  project: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  editProject: PropTypes.func.isRequired,
};

export default General;
