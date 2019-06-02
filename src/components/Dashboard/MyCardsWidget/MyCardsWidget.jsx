import React from 'react';
import {
  CheckCircle,
  ArrowDownward,
} from 'rmdi';

import {
  Container,
  Header,
  HeaderRow,
  HeaderCell,
  BodyRow,
  BodyCell,
} from './styles';

const MyCardsWidget = () => (
  <Container>
    <Header>
      Мои Карточки
    </Header>

    <HeaderRow>
      <HeaderCell>
        Тип
      </HeaderCell>
      <HeaderCell>
        Название
      </HeaderCell>
      <HeaderCell>
        Описание
      </HeaderCell>
      <HeaderCell>
        Приоритет
      </HeaderCell>
    </HeaderRow>
    <BodyRow>
      <BodyCell>
        <CheckCircle color="#00C781" />
      </BodyCell>
      <BodyCell>
        Раздел 1 - Разработка ПО
      </BodyCell>
      <BodyCell />
      <BodyCell>
        <ArrowDownward color="#FFAA15" />
      </BodyCell>
    </BodyRow>

  </Container>
);

export default MyCardsWidget;
