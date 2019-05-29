import React from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'utils';
import { Projects } from 'components';
import { LoadingIndicator } from 'components/Common';

const ProjectsContainer = ({ history: { push } }) => {
  const [{ data: projects, loading: loadingProjects }] = useApi({ url: 'project' }, { loading: true });
  const [{ loading }, request] = useApi();

  const addProject = body => request({
    method: 'post',
    url: 'project',
    body,
    onSuccess: project => push(`/secure/projects/${project.id}/board`),
  });


  if (loadingProjects) return <LoadingIndicator />;

  const ProjectsProps = {
    projects,
    loading,
    addProject,
    push,
  };

  return <Projects {...ProjectsProps} />;
};

ProjectsContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default React.memo(ProjectsContainer);
