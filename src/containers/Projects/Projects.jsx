import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'utils';
import { Projects } from 'components';
import { LoadingIndicator } from 'components/Common';

const ProjectsContainer = ({ history: { push } }) => {
  const [{ data: projects, loading: loadingProjects }] = useApi({ url: 'project' }, { loading: true });
  const [{ data: project, loading }, request] = useApi();

  useEffect(() => {
    if (project) {
      push(`/secure/projects/${project.id}`);
    }
  }, [loading]);

  if (loadingProjects) return <LoadingIndicator />;

  const ProjectsProps = {
    projects,
    loading,
    createProject: body => request({ method: 'post', url: 'project', body }),
    push,
  };

  return <Projects {...ProjectsProps} />;
};

ProjectsContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default React.memo(ProjectsContainer);
