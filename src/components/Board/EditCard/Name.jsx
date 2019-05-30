import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Check, Close } from 'rmdi';

import { Input } from 'components/Common';

const Label = styled.div`
  font-weight: 400;
  font-size: 24px;
  padding: 5px 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  & > div {
    flex: 1;
  }
  & > svg {
    margin-left: 5px;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }
  }
`;

const Name = ({ value, onChange }) => {
  const [mode, setMode] = useState('view');
  const [name, setName] = useState(value);
  if (mode === 'view') {
    return <Label onClick={() => setMode('edit')}>{name}</Label>;
  }

  return (
    <Value>
      <Input value={name} onChange={({ target: { value: newName } }) => setName(newName)} />
      <Check size={24} onClick={() => onChange(name)} />
      <Close
        size={24}
        onClick={() => {
          setName(value);
          setMode('view');
        }}
      />
    </Value>
  );
};

Name.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Name };
