import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { useApi } from 'utils';
import { Project } from 'components';
import { LoadingIndicator } from 'components/Common';
import { useStore } from 'store';

const ProjectContainer = ({
  children,
  location: { pathname },
  match: { params: { id } },
}) => {
  const [state, setState] = useStore();

  const [{ data: projects, loading: projectsLoading }] = useApi({ url: 'project' }, { loading: true });
  const [{ data: project, loading: projectLoading }] = useApi({
    url: `project/${id}`,
    onSuccess: (projectData) => {
      if (projectData) {
        setState({ ...state, project: projectData, board: projectData.boards[0] });
      }
    },
  }, { loading: true });


  const onBoardChange = board => setState({ ...state, board });
  const { board = {} } = state;

  if (projectsLoading || projectLoading) return <LoadingIndicator />;

  if (!project) {
    return <Redirect to="/not-found" />;
  }

  const ProjectProps = {
    pathname,
    projects,
    project,
    board,
    onBoardChange,
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
