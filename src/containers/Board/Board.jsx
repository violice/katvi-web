import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';

import { useStore } from 'store';
import { useApi } from 'utils';
import { Board } from 'components';
import { LoadingIndicator } from 'components/Common';

const BoardContainer = ({ history: { push, goBack }, location: { search } }) => {
  const [state, setState] = useStore();
  const { board } = state;

  const searchParams = QueryString.parse(search);

  const [{ loading: boardLoading }, boardRequest] = useApi({
    url: `board/${board.id}`,
    onSuccess: boardData => setState({ ...state, board: boardData }),
  }, { loading: true });

  const editBoard = body => boardRequest({
    method: 'patch',
    url: `board/${state.board.id}`,
    body,
    onSuccess: (boardData) => {
      goBack();
      setState({ ...state, board: boardData });
    },
  });

  // TODO: fix board select
  // useEffect(() => {
  //   boardRequest({
  //     url: `board/${board.id}`,
  //     onSuccess: boardData => setState({ ...state, board: boardData }),
  //   });
  // }, [board.id]);

  const [{ loading: cardLoading, data: cardData }, cardRequest] = useApi();

  useEffect(() => {
    if (searchParams.card) {
      cardRequest({
        url: `/card/${searchParams.card}`,
      });
    }
  }, [searchParams.card]);

  const addCard = card => cardRequest({
    method: 'post',
    url: '/card',
    body: {
      ...card,
      priority: card.priority.value,
      type: card.type.value,
      column: state.board.columns[0],
    },
    onSuccess: (addedCard) => {
      const column = board.columns.find(col => col.id === addedCard.column.id);
      column.cards.push(addedCard);
      setState({ ...state, board });
      goBack();
    },
  });

  const editCard = card => console.log(card);

  if (boardLoading) return <LoadingIndicator />;

  const BoardProps = {
    searchParams,
    board,
    cardLoading,
    card: cardData,
    push,
    goBack,
    editBoard,
    addCard,
    editCard,
  };

  return <Board {...BoardProps} />;
};

BoardContainer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default React.memo(BoardContainer);
