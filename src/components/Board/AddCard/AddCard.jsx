import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckCircle, Cancel, Info, ArrowUpward, ArrowDownward,
} from 'rmdi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  Modal, Button, Input, TextArea, Select,
} from 'components/Common';

import { Container, Selects, Footer } from './styles';

const TYPES = [
  { label: 'Задача', value: 'Task', icon: () => <CheckCircle color="#00C781" /> },
  { label: 'Исправление', value: 'Bug', icon: () => <Cancel color="#FF4040" /> },
  { label: 'Улучшение', value: 'Improvement', icon: () => <Info color="#FFAA15" /> },
];

const PRIORITIES = [
  { label: 'Критический', value: 'Critical', icon: () => <ArrowUpward color="#FF4040" /> },
  { label: 'Высокий', value: 'High', icon: () => <ArrowUpward color="#FF4040" /> },
  { label: 'Средний', value: 'Medium', icon: () => <ArrowDownward color="#FFAA15" /> },
  { label: 'Низкий', value: 'Low', icon: () => <ArrowDownward color="#00C781" /> },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Пожалуйста введите название'),
  description: Yup.string(),
});

const AddCard = ({
  opened,
  loading,
  onClose,
  addCard,
}) => (
  <Formik
    validationSchema={validationSchema}
    initialValues={{
      name: '',
      description: '',
      type: TYPES[0],
      priority: PRIORITIES[2],
    }}
    onSubmit={addCard}
    render={({ submitForm, resetForm }) => (
      <Modal
        header="Добавить карточку"
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
              loading={loading}
              onClick={submitForm}
            >
                Добавить
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
            <Selects>
              <Field
                name="type"
                render={({ field: { value, onChange } }) => (
                  <Select
                    items={TYPES}
                    labelKey="label"
                    valueKey="value"
                    iconKey="icon"
                    value={value}
                    onSelect={(_, item) => onChange({ target: { value: item, name: 'type' } })}
                  />
                )}
              />
              <Field
                name="priority"
                render={({ field: { value, onChange } }) => (
                  <Select
                    items={PRIORITIES}
                    labelKey="label"
                    valueKey="value"
                    iconKey="icon"
                    value={value}
                    onSelect={(_, item) => onChange({ target: { value: item, name: 'priority' } })}
                  />
                )}
              />
            </Selects>
            <Field size="small" name="name" placeholder="Название" component={Input} />
            <Field size="small" rows={5} name="description" placeholder="Описание" component={TextArea} />
          </Form>
        </Container>
      </Modal>
    )}
  />


);

AddCard.propTypes = {
  opened: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
};

export default AddCard;
