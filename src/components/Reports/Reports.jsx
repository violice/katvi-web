import React from 'react';
import { MoreHoriz } from 'rmdi';


import { Report } from './Report';
import { Container, Header, Content } from './styles';

const Reports = () => (
  <Container>
    <Header>
        Отчеты
      <MoreHoriz color="#7D4CDB" size="48" />
    </Header>
    <Content>
      <Report />
    </Content>
  </Container>
);

export default Reports;
