import React from 'react';
import PropTypes from 'prop-types';
import { MoreHoriz } from 'rmdi';

import { Button } from 'components/Common';

import { AddCard } from './AddCard';
import { Card } from './Card';
import { EditCard } from './EditCard';
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
  searchParams,
  board,
  cardLoading,
  card,
  push,
  goBack,
  editBoard,
  addCard,
  editCard,
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
      {board.columns
        .sort((x, y) => (x.settings && y.settings && x.settings.order > y.settings.order ? 1 : -1))
        .map(column => (
          <Column key={column.id}>
            <ColumnHeader>
              <span>{column.name}</span>
              <span>{column.cards.length}</span>
            </ColumnHeader>
            <ColumnContent>
              {column.cards.map(c => (
                <Card key={c.id} card={c} onClick={() => push(`?modal=editCard&card=${c.id}`)} />
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
    <EditCard
      opened={searchParams.modal === 'editCard'}
      columns={board.columns}
      loading={cardLoading}
      card={card}
      editCard={editCard}
      onClose={goBack}
    />
  </Container>
);

Board.propTypes = {
  searchParams: PropTypes.object.isRequired,
  board: PropTypes.object.isRequired,
  cardLoading: PropTypes.bool.isRequired,
  card: PropTypes.object,
  push: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  editBoard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
};

Board.defaultProps = {
  card: {},
};

export default Board;
