import React from 'react';

import {
  Container,
  Header,
  HeaderRow,
  HeaderCell,
  BodyRow,
  BodyCell,
} from './styles';

const Report = () => (
  <Container>
    <Header>
      Карточки
    </Header>

    <HeaderRow>
      <HeaderCell>
        Задачи
      </HeaderCell>
      <HeaderCell>
        В процессе
      </HeaderCell>
      <HeaderCell>
        Готово
      </HeaderCell>
      <HeaderCell>
        Всего
      </HeaderCell>
    </HeaderRow>
    <BodyRow>
      <BodyCell>
        0
      </BodyCell>
      <BodyCell>
        4
      </BodyCell>
      <BodyCell>
        1
      </BodyCell>
      <BodyCell>
        5
      </BodyCell>
    </BodyRow>

  </Container>
);

export default Report;
