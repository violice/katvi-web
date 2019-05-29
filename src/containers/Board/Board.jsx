import React from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';

import { useStore } from 'store';
import { useApi } from 'utils';
import { Board } from 'components';
import { LoadingIndicator } from 'components/Common';

const BoardContainer = ({ history: { push, goBack }, location: { search } }) => {
  const [state, setState] = useStore();
  const { board } = state;

  const [{ loading: boardLoading }, boardRequest] = useApi({
    url: `board/${board.id}`,
    onSuccess: boardData => setState({ ...state, board: boardData }),
  }, { loading: true });

  const editBoard = body => boardRequest({ method: 'patch', url: `board/${state.board.id}`, body });

  // TODO: fix board select
  // useEffect(() => {
  //   boardRequest({
  //     url: `board/${board.id}`,
  //     onSuccess: boardData => setState({ ...state, board: boardData }),
  //   });
  // }, [board.id]);

  const [{ loading: cardLoading }, cardRequest] = useApi();

  const addCard = card => cardRequest({
    method: 'post',
    url: '/card',
    body: {
      ...card,
      priority: card.priority.value,
      type: card.type.value,
      column: state.board.columns[0],
    },
    onSuccess: (cardData) => {
      const column = board.columns.find(col => col.id === cardData.column.id);
      column.cards.push(cardData);
      setState({ ...state, board });
      goBack();
    },
  });

  if (boardLoading) return <LoadingIndicator />;

  const BoardProps = {
    board,
    cardLoading,
    searchParams: QueryString.parse(search),
    editBoard,
    addCard,
    push,
    goBack,
  };

  return <Board {...BoardProps} />;
};

BoardContainer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default React.memo(BoardContainer);
