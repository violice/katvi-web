import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  HeaderCell,
  Body,
  BodyCell,
  Row,
} from './styles';

const getCellValue = (row, field) => {
  if (field.includes('.')) {
    const keys = field.split('.');
    let value = row[keys[0]];
    for (let i = 1; i < keys.length; i += 1) {
      value = value[keys[i]];
    }
    return value;
  }
  return row[field];
};

const Table = ({ data, columns }) => (
  <Container>
    <Header>
      <Row>
        {columns.map((col, colIndex) => (
          <HeaderCell
            key={`table-header-row-1-col-${colIndex}`}
            {...col}
          >
            {col.header}
          </HeaderCell>
        ))}
      </Row>
    </Header>
    <Body>
      {data.map((row, rowIndex) => (
        <Row key={`table-row-${rowIndex}`}>
          {columns.map((col, colIndex) => (
            <BodyCell
              key={`table-body-row-${rowIndex}-col-${colIndex}`}
              {...col}
            >
              {col.render ? col.render(row[col.field], row) : getCellValue(row, col.field)}
            </BodyCell>
          ))}
        </Row>
      ))}
    </Body>
  </Container>
);

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
};

Table.defaultProps = {
  data: [],
  columns: [],
};

export default Table;
