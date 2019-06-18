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
import {
  Container,
  Left,
  Right,
  Field,
  LargeLabel,
  Label,
  Tag,
  Author,
  Member,
  Date,
} from './styles';

const EditCard = ({
  opened,
  columns,
  loading,
  card,
  editCard,
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

        return (
          <>
            <Left>
              <Name
                value={card.name}
                onChange={name => editCard({ ...card, name })}
              />
              <LargeLabel>Описание</LargeLabel>
              <Description
                value={card.description}
                onChange={description => editCard({ ...card, description })}
              />
            </Left>
            <Right>
              <Field>
                <Label>Статус</Label>
                <Select
                  items={columns}
                  labelKey="name"
                  valueKey="id"
                  value={card.column}
                  onSelect={(_, column) => editCard({ ...card, column })}
                />
              </Field>
              <Field>
                <Label>Приоритет</Label>
                <Select
                  items={PRIORITIES}
                  labelKey="label"
                  valueKey="value"
                  iconKey="icon"
                  value={PRIORITIES.find(p => p.value === card.priority)}
                  onSelect={(_, priority) => editCard({ ...card, priority })}
                />
              </Field>
              <Field>
                <Label>Теги</Label>
                <Tag>Документ</Tag>
              </Field>
              <Field>
                <Label>Создатель</Label>
                <Author>
                  <Member />
                  {card.user && card.user.email}
                </Author>
              </Field>
              <Field>
                <Label>Участники</Label>
                <Member />
                <Member />
                <Member />
              </Field>
              <Date>
                {`Создана ${format(card.createdAt, 'MMMM D, YYYY, HH:mm', { locale: ruLocale })}`}
              </Date>
              <Date>
                {`Обновлена ${format(card.updatedAt, 'MMMM D, YYYY, HH:mm', { locale: ruLocale })}`}
              </Date>
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
  editCard: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

EditCard.defaultProps = {
  card: null,
};

export default EditCard;
