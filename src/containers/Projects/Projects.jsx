import React from 'react';

import { useApi } from 'utils';
import { Projects } from 'components';
import { LoadingIndicator } from 'components/Common';

const ProjectContainer = () => {
  const [{ data, loading }] = useApi({ url: 'project' });

  if (loading) return <LoadingIndicator />;

  if (!data) return null;

  return <Projects projects={data} />;
};

export default ProjectContainer;
