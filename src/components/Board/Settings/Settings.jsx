import React from 'react';
import PropTypes from 'prop-types';
import {
  Edit, ArrowUpward, ArrowDownward, Close,
} from 'rmdi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Modal, Button, Input, TextArea,
} from 'components/Common';

import { AddColumn } from './AddColumn';
import {
  Container, ColumnsHeader, Column, Footer,
} from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  description: Yup.string(),
});

const Settings = ({
  opened,
  board,
  // loading,
  // request,
  onClose,
  editBoard,
}) => (
  <Formik
    validationSchema={validationSchema}
    initialValues={board}
    onSubmit={editBoard}
    render={({ submitForm, resetForm }) => (
      <Modal
        header={`${board.name} - Настройки`}
        footer={(
          <Footer>
            <Button
              color="#000000"
              background="#dadada"
              size="small"
              onClick={() => {
                resetForm();
                onClose();
              }}
            >
                Закрыть
            </Button>
            <Button
              color="#7D4CDB"
              background="#6FFFB0"
              size="small"
              // loading={loading}
              onClick={submitForm}
            >
                Применить
            </Button>
          </Footer>
          )}
        opened={opened}
        onClose={() => {
          resetForm();
          onClose();
        }}
      >
        <Container>
          <Form>
            <Field size="small" name="name" placeholder="Название" component={Input} />
            <Field size="small" rows={5} name="description" placeholder="Описание" component={TextArea} />
            <Field
              name="columns"
              render={({ field: { value, onChange } }) => (
                <>
                  <ColumnsHeader>Колонки</ColumnsHeader>
                  {value.map((col, index) => (
                    <Column key={`col-${index}`}>
                      <span>{col.name}</span>
                      <Edit />
                      <ArrowUpward />
                      <ArrowDownward />
                      <Close onClick={() => onChange({
                        target: {
                          value: value.filter((_, i) => i !== index),
                          name: 'columns',
                        },
                      })}
                      />
                    </Column>
                  ))}
                  <AddColumn onAdd={col => onChange({
                    target: {
                      value: [...value, col],
                      name: 'columns',
                    },
                  })}
                  />
                </>
              )}
            />
          </Form>
        </Container>
      </Modal>
    )}
  />
);

Settings.propTypes = {
  opened: PropTypes.bool.isRequired,
  board: PropTypes.object.isRequired,
  // loading: PropTypes.bool.isRequired,
  // request: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Settings;
