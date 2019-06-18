import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import ReactQuill from 'react-quill';
import * as Yup from 'yup';

import { Button, Input } from 'components/Common';

import { Container, Footer } from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Пожалуйста введите название'),
  content: Yup.string(),
});

const Doc = ({ doc, createDocument, editDocument }) => (
  <Container>
    <Formik
      validationSchema={validationSchema}
      initialValues={doc}
      onSubmit={(values) => {
        if (doc.id) {
          editDocument(doc.id, values);
        } else {
          createDocument(values);
        }
      }}
      render={() => (
        <Form>
          <Field size="small" name="name" placeholder="Название документа" component={Input} />
          <Field
            name="content"
            render={({ field: { name, value, onChange } }) => (
              <ReactQuill
                value={value}
                onChange={newValue => onChange({ target: { name, value: newValue } })}
              />
            )}
          />
          <Footer>
            <Button
              color="#000000"
              background="#dadada"
              size="small"
            >
            Закрыть
            </Button>
            <Button
              color="#7D4CDB"
              background="#6FFFB0"
              size="small"
            >
              {doc.id ? 'Изменить' : 'Добавить' }
            </Button>
          </Footer>
        </Form>
      )}
    />
  </Container>
);

Doc.propTypes = {
  doc: PropTypes.object.isRequired,
  createDocument: PropTypes.func.isRequired,
  editDocument: PropTypes.func.isRequired,
};

export default Doc;
