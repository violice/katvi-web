import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextArea, Button } from 'components/Common';

const View = styled.div`
  font-weight: 400;
  font-size: 18px;
  padding: 5px 10px;
  margin-bottom: 28px;
  border-radius: 5px;
  white-space: pre-line;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Edit = styled.div`
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
  & > button:first-child {
    margin-right: 10px;
  }
`;


const Description = ({ value, onChange }) => {
  const [mode, setMode] = useState('view');
  const [description, setDescription] = useState(value);

  if (mode === 'view') {
    return (
      <View onClick={() => setMode('edit')}>{value}</View>
    );
  }

  return (
    <Edit>
      <TextArea
        size="small"
        rows="10"
        value={description}
        onChange={({ target: { value: newName } }) => setDescription(newName)}
      />
      <Buttons>
        <Button
          color="#000000"
          background="#dadada"
          size="small"
          onClick={() => {
            setDescription(value);
            setMode('view');
          }}
        >
          Закрыть
        </Button>
        <Button
          color="#7D4CDB"
          background="#6FFFB0"
          size="small"
          onClick={() => onChange(description)}
        >
          Применить
        </Button>
      </Buttons>
    </Edit>
  );
};

Description.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Description };
