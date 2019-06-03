import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'components/Common';

import {
  Container,
  Header,
} from './styles';

const Report = ({ name, columns, data }) => (
  <Container>
    <Header>
      {name}
    </Header>

    <Table
      columns={columns}
      data={data}
    />
  </Container>
);

Report.propTypes = {
  name: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Report;
