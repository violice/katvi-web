import React from 'react';
import PropTypes from 'prop-types';

import { Container, BaseInput, Error } from './styles';

const Input = ({ field, form, ...props }) => (
  <Container>
    <BaseInput {...field} {...form} {...props} autoComplete="off" />
    {form.touched[field.name] && <Error>{form.errors[field.name]}</Error>}
  </Container>
);

Input.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  size: PropTypes.oneOf(['medium', 'small']),
};

Input.defaultProps = {
  field: {
    name: '',
  },
  form: {
    errors: {},
    touched: {},
  },
  size: 'medium',
};

export default Input;
