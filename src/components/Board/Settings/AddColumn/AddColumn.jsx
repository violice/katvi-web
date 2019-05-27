import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from 'components/Common';

import { Container } from './styles';

const AddColumn = ({
  onAdd,
}) => {
  const [name, setName] = useState('');
  return (
    <Container>
      <Input
        size="small"
        placeholder="Название колонки"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <Button
        color="#7D4CDB"
        background="#6FFFB0"
        size="small"
        type="button"
        disabled={!name}
        onClick={() => {
          onAdd({ name });
          setName('');
        }}
      >
          Добавить
      </Button>
    </Container>
  );
};

AddColumn.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddColumn;
