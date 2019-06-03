import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'components/Common';
import { TYPES, PRIORITIES } from 'components/Board/constants';

import {
  Container,
  Header,
} from './styles';

const MyCardsWidget = ({ data }) => (
  <Container>
    <Header>
      Мои Карточки
    </Header>

    <Table
      columns={[
        {
          header: 'Тип',
          field: 'type',
          render: value => TYPES.find(t => t.value === value).icon(),
          align: 'center',
          width: '50px',
        },
        {
          header: 'Название',
          field: 'name',
        },
        {
          header: 'Статус',
          field: 'column.name',
          width: '150px',
        },
        {
          header: 'Приоритет',
          field: 'priority',
          render: value => PRIORITIES.find(p => p.value === value).icon(),
          align: 'center',
          width: '150px',
        },
      ]}
      data={data}
    />
  </Container>
);

MyCardsWidget.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MyCardsWidget;
