import React from 'react';
import { MoreHoriz } from 'rmdi';

import { Button } from 'components/Common';

import { Card } from './Card';
import {
  Container,
  Header,
  Content,
  Column,
  ColumnHeader,
  ColumnContent,
} from './styles';

const Board = () => (
  <Container>
    <Header>
      Default Board
      <MoreHoriz color="#7D4CDB" size="48" />
    </Header>
    <Header>
      <Button size="small">Add Card</Button>
    </Header>
    <Content>
      <Column>
        <ColumnHeader>
          <span>To Do</span>
          <span>1</span>
        </ColumnHeader>
        <ColumnContent>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ColumnContent>
      </Column>
      <Column>
        <ColumnHeader>
          <span>To Do</span>
          <span>1</span>
        </ColumnHeader>
        <ColumnContent>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ColumnContent>
      </Column>
      <Column>
        <ColumnHeader>
          <span>To Do</span>
          <span>1</span>
        </ColumnHeader>
        <ColumnContent>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ColumnContent>
      </Column>
      <Column>
        <ColumnHeader>
          <span>To Do</span>
          <span>1</span>
        </ColumnHeader>
        <ColumnContent>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ColumnContent>
      </Column>
    </Content>
  </Container>
);

export default Board;
