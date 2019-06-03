import React from 'react';
import PropTypes from 'prop-types';
import { MoreHoriz } from 'rmdi';


import { Report } from './Report';
import { Container, Header, Content } from './styles';

const Reports = ({ board }) => (
  <Container>
    <Header>
        Отчеты
      <MoreHoriz color="#7D4CDB" size="48" />
    </Header>
    <Content>
      <Report
        name="Карточки"
        columns={[
          { header: 'Статус', field: 'name' },
          { header: 'Карточек', field: 'cards.length' },
        ]}
        data={board.columns}
      />
    </Content>
  </Container>
);

Reports.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Reports;
