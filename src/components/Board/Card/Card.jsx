import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, Cancel, Info } from 'rmdi';

import {
  Container,
  Priority,
  Top,
  Bottom,
  Tag,
  Member,
} from './styles';

const Card = ({ card, onClick }) => (
  <Container onClick={onClick}>
    <Priority priority={card.priority} />
    <Top>
      {card.name}
    </Top>
    <Bottom>
      {(() => {
        switch (card.type) {
          case 'Task':
            return <CheckCircle color="#00C781" />;
          case 'Bug':
            return <Cancel color="#FF4040" />;
          case 'Improvement':
            return <Info color="#FFAA15" />;
          default:
            return null;
        }
      })()}
      <Tag>Документ</Tag>
      <Member />
    </Bottom>
  </Container>
);

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
