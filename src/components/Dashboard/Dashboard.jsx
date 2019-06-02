import React from 'react';
import PropTypes from 'prop-types';
import { MoreHoriz } from 'rmdi';

import { MyCardsWidget } from './MyCardsWidget';
import { Container, Header, Content } from './styles';

const Dashboard = ({ data }) => (
  <Container>
    <Header>
        Рабочий стол
      <MoreHoriz color="#7D4CDB" size="48" />
    </Header>
    <Content>
      <MyCardsWidget data={data} />
    </Content>
  </Container>
);

Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Dashboard;
