import React from 'react';
import PropTypes from 'prop-types';
import { MoreHoriz } from 'rmdi';

import { Button } from 'components/Common';

import { AddCard } from './AddCard';
import { Card } from './Card';
import { Settings } from './Settings';
import {
  Container,
  Header,
  Content,
  Column,
  ColumnHeader,
  ColumnContent,
} from './styles';

const Board = ({
  board,
  cardLoading,
  searchParams,
  editBoard,
  addCard,
  push,
  goBack,
}) => (
  <Container>
    <Header onClick={() => push('?modal=settings')}>
      {board.name}
      <MoreHoriz color="#7D4CDB" size="48" />
    </Header>
    <Header>
      <Button size="small" onClick={() => push('?modal=addCard')}>Добавить карточку</Button>
    </Header>
    <Content>
      {board.columns.map(column => (
        <Column key={column.id}>
          <ColumnHeader>
            <span>{column.name}</span>
            <span>{column.cards.length}</span>
          </ColumnHeader>
          <ColumnContent>
            {column.cards.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </ColumnContent>
        </Column>
      ))}
    </Content>
    <AddCard
      opened={searchParams.modal === 'addCard'}
      loading={cardLoading}
      onClose={goBack}
      addCard={addCard}
    />
    <Settings
      opened={searchParams.modal === 'settings'}
      board={board}
      onClose={goBack}
      editBoard={editBoard}
    />
  </Container>
);

Board.propTypes = {
  board: PropTypes.object.isRequired,
  cardLoading: PropTypes.bool.isRequired,
  searchParams: PropTypes.object.isRequired,
  editBoard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default Board;
