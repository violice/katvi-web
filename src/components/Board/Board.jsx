import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MoreHoriz } from 'rmdi';

import { Button } from 'components/Common';

import { Settings } from './Settings';
import { Card } from './Card';
import {
  Container,
  Header,
  Content,
  Column,
  ColumnHeader,
  ColumnContent,
} from './styles';

const Board = ({ board, editBoard }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Container>
      <Header onClick={() => setOpened(true)}>
        {board.name}
        <MoreHoriz color="#7D4CDB" size="48" />
      </Header>
      <Header>
        <Button size="small">Добавить карточку</Button>
      </Header>
      <Content>
        {board.columns.map(column => (
          <Column>
            <ColumnHeader>
              <span>{column.name}</span>
              <span>{column.cards.length}</span>
            </ColumnHeader>
            <ColumnContent>
              {column.cards.map(card => (
                <Card />
              ))}

            </ColumnContent>
          </Column>
        ))}
      </Content>
      <Settings
        opened={opened}
        board={board}
        onClose={() => setOpened(false)}
        editBoard={editBoard}
      />
    </Container>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Board;
