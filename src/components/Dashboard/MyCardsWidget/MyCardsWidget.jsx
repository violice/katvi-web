import React from 'react';
import PropTypes from 'prop-types';

import { TYPES, PRIORITIES } from 'components/Board/constants';

import {
  Container,
  Header,
  HeaderRow,
  HeaderCell,
  BodyRow,
  BodyCell,
} from './styles';

const MyCardsWidget = ({ data }) => (
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
    {data.map(item => (
      <BodyRow>
        <BodyCell>
          {TYPES.find(t => t.value === item.type).icon()}
        </BodyCell>
        <BodyCell>
          {item.name}
        </BodyCell>
        <BodyCell>
          {item.description}
        </BodyCell>
        <BodyCell>
          {PRIORITIES.find(p => p.value === item.priority).icon()}
        </BodyCell>
      </BodyRow>
    ))}
  </Container>
);

MyCardsWidget.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MyCardsWidget;
