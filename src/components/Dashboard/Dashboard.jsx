import React from 'react';
import { MoreHoriz } from 'rmdi';


import { MyCardsWidget } from './MyCardsWidget';
import { Container, Header, Content } from './styles';

const Dashboard = () => (
  <Container>
    <Header>
        Рабочий стол
      <MoreHoriz color="#7D4CDB" size="48" />
    </Header>
    <Content>
      <MyCardsWidget />
    </Content>
  </Container>
);

export default Dashboard;
