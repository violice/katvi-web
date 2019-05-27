import React, { useEffect } from 'react';
import { useStore } from 'store';
import { useApi } from 'utils';
import { Board } from 'components';
import { LoadingIndicator } from 'components/Common';

const BoardContainer = () => {
  const [state, setState] = useStore();
  const [{ data, loading }, request] = useApi({ url: `board/${state.board.id}` }, { loading: true });

  const editBoard = body => request({ method: 'patch', url: `board/${state.board.id}`, body });

  useEffect(() => {
    if (!loading) {
      setState({ ...state, board: data });
    }
  }, [loading]);

  if (loading) return <LoadingIndicator />;

  return <Board board={data} editBoard={editBoard} />;
};

export default React.memo(BoardContainer);
