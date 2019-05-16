import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { useApi } from 'utils';
import { Project } from 'components';
import { LoadingIndicator } from 'components/Common';

const ProjectContainer = ({
  children,
  location: { pathname },
  match: { params: { id } },
}) => {
  const [{ data: projects, loading: projectsLoading }] = useApi({ url: 'project' }, { loading: true });
  const [{ data: project, loading: projectLoading }] = useApi({ url: `project/${id}` }, { loading: true });

  if (projectsLoading || projectLoading) return <LoadingIndicator />;

  if (!project) {
    return <Redirect to="/not-found" />;
  }

  const ProjectProps = {
    pathname,
    projects,
    project,
  };

  return (
    <Project {...ProjectProps}>
      {children}
    </Project>
  );
};

ProjectContainer.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default React.memo(ProjectContainer);
