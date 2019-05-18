import React from 'react';
import { useStore } from 'store';
import { useApi } from 'utils';
import { Board } from 'components';
import { LoadingIndicator } from 'components/Common';

const BoardContainer = () => {
  const [{ board: { id } }] = useStore();
  const [{ data, loading }] = useApi({ url: `board/${id}` }, { loading: true });

  if (loading) return <LoadingIndicator />;

  return <Board board={data} />;
};

export default React.memo(BoardContainer);
