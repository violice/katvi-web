import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Check, Close } from 'rmdi';

import { Input } from 'components/Common';

const View = styled.div`
  font-weight: 400;
  font-size: 24px;
  padding: 5px 10px;
  margin-bottom: 28px;
  border-radius: 5px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
    return <View onClick={() => setMode('edit')}>{name}</View>;
  }

  return (
    <Edit>
      <Input value={name} onChange={({ target: { value: newName } }) => setName(newName)} />
      <Check size={24} onClick={() => onChange(name)} />
      <Close
        size={24}
        onClick={() => {
          setName(value);
          setMode('view');
        }}
      />
    </Edit>
  );
};

Name.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Name };
