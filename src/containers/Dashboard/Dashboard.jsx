import React from 'react';

import { useApi } from 'utils';
import { Dashboard } from 'components';
import { LoadingIndicator } from 'components/Common';

const DashboardContainer = () => {
  const [{ loading, data }] = useApi({ url: 'card/my' }, { loading: true });

  if (loading) return <LoadingIndicator />;

  return (
    <Dashboard data={data} />
  );
};

export default React.memo(DashboardContainer);
