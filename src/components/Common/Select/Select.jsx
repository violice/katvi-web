import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowDown } from 'rmdi';

import {
  Container, Value, Label, Menu, MenuItem,
} from './styles';

const renderIcon = Icon => <Icon />;

const Select = ({
  items, value, valueKey, labelKey, iconKey, onSelect,
}) => {
  const menuRef = useRef(null);
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const onDocumentClick = (e) => {
      if (opened && menuRef.current !== e.target) {
        setOpened(false);
      }
    };
    document.addEventListener('click', onDocumentClick);
    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [opened]);
  return (
    <Container>
      <Value onClick={() => setOpened(true)}>
        {iconKey && renderIcon(value[iconKey])}
        <Label>{labelKey ? value[labelKey] : value}</Label>
        <KeyboardArrowDown color="#7D4CDB" />
      </Value>
      {opened
      && (
      <Menu ref={menuRef}>
        {items.map(item => (
          <MenuItem
            onClick={() => {
              if (valueKey
                ? item[valueKey] !== value[valueKey]
                : item !== value
              ) {
                onSelect(valueKey ? item[valueKey] : item, item);
              }
            }}
            key={valueKey ? item[valueKey] : item}
          >
            {iconKey && renderIcon(item[iconKey])}
            {labelKey ? item[labelKey] : item}
          </MenuItem>
        ))}
      </Menu>
      )}
    </Container>
  );
};

Select.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  iconKey: PropTypes.string,
  onSelect: PropTypes.func,
};

Select.defaultProps = {
  valueKey: null,
  labelKey: null,
  iconKey: null,
  onSelect: () => {},
};

export default Select;
