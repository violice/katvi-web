import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import {
  Modal,
  LoadingIndicator,
  Select,
} from 'components/Common';

import { Name } from './Name';
import { Description } from './Description';
import { PRIORITIES } from '../constants';
import { Container, Left, Right } from './styles';

const EditCard = ({
  opened,
  columns,
  loading,
  card,
  onClose,
}) => (

  <Modal
    opened={opened}
    onClose={() => {
      onClose();
    }}
  >
    <Container>
      {(() => {
        if (loading) return <LoadingIndicator />;

        if (!card) return 'Card not found';

        console.log(columns);

        return (
          <>
            <Left>
              <Name value={card.name} onChange={console.log} />
              <Description value={card.description} onChange={console.log} />
              {card.description}
            </Left>
            <Right>
              <Select
                items={columns}
                labelKey="name"
                valueKey="id"
                value={card.column}
                onSelect={console.log}
              />
              <Select
                items={PRIORITIES}
                labelKey="label"
                valueKey="value"
                iconKey="icon"
                value={PRIORITIES.find(p => p.value === card.priority)}
                onSelect={console.log}
              />
              Tags
              <br />
              Creator
              {card.user.email}
              <br />
              Members
              <br />
              {format(card.createdAt, 'MMMM D, YYYY, HH:mm', { locale: ruLocale })}
              <br />
              {format(card.updatedAt, 'MMMM D, YYYY, HH:mm', { locale: ruLocale })}
            </Right>
          </>
        );
      })()}
    </Container>
  </Modal>
);

EditCard.propTypes = {
  opened: PropTypes.bool.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  card: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

EditCard.defaultProps = {
  card: null,
};

export default EditCard;
