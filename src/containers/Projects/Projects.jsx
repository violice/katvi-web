import React from 'react';

import { useApi } from 'utils';
import { Projects } from 'components';
import { LoadingIndicator } from 'components/Common';

const ProjectsContainer = () => {
  const [{ data, loading }] = useApi({ url: 'project' }, { loading: true });

  if (loading) return <LoadingIndicator />;

  return <Projects projects={data} />;
};

export default ProjectsContainer;
