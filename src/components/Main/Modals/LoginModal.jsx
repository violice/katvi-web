import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import {
  Modal,
  Input,
  Button,
  Logo,
} from 'components/Common';

import { Formik, Form, Field } from 'formik';
import { Container, Header } from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: Yup.string()
    .required('Please enter a password'),
});

const LoginModal = ({ opened, loading, request, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose}>
      <Container>
        <Header>
          Log In to
          <Logo />
        </Header>
        <Link to="/registration">or create an account</Link>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            request({
              method: 'post',
              url: 'login',
              body: values,
            });
          }}
          render={() => (
            <Form>
              <Field name="email" placeholder="Email" component={Input} />
              <Field name="password" placeholder="Password" type="password" component={Input} />
              <Button loading={loading} type="submit">Log In</Button>
            </Form>
          )}
        />
      </Container>
    </Modal>
  );
};

LoginModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  request: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
