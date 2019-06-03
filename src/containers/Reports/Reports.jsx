import React from 'react';

import { Reports } from 'components';
import { useStore } from 'store';

const ReportsContainer = () => {
  const [{ board }] = useStore();
  return (
    <Reports board={board} />
  );
};

export default React.memo(ReportsContainer);
