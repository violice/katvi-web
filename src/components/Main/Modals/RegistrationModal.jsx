import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Modal,
  Input,
  Button,
  Logo,
} from 'components/Common';

import { Container, Header } from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Пожалуйста введите валидный адрес электронной почты')
    .required('Пожалуйста введите адрес электронной почты'),
  password: Yup.string()
    .required('Пожалуйста введите пароль'),
});

const RegistrationModal = ({
  opened, loading, request, onClose,
}) => (
  <Modal opened={opened} onClose={onClose}>
    <Container>
      <Header>
         Зарегистироваться в
        <Logo />
      </Header>
      <Link to="/login">или войти в существующий аккаунт</Link>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          request({
            method: 'post',
            url: 'registration',
            body: values,
          });
        }}
        render={() => (
          <Form>
            <Field name="email" placeholder="Электронная почта" component={Input} />
            <Field name="password" placeholder="Пароль" type="password" component={Input} />
            <Button loading={loading} type="submit" color="#7D4CDB" background="#6FFFB0">Зарегистироваться</Button>
          </Form>
        )}
      />
    </Container>
  </Modal>
);

RegistrationModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  request: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegistrationModal;
