import React, { useEffect } from 'react';
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
  const [{ data: projects, loading: projectsLoading }] = useApi({ url: 'project' }, { loading: true });
  const [{ data: project, loading: projectLoading }] = useApi({ url: `project/${id}` }, { loading: true });
  const [{ data: boards, loading: boardsLoading }] = useApi({ url: 'board', queryParams: { projectId: id } });

  const [state, setState] = useStore();

  useEffect(() => {
    if (project) {
      setState({ ...state, project });
    }
  }, [projectLoading]);

  const onBoardChange = board => setState({ ...state, board });
  const { board } = state;

  useEffect(() => {
    if (boards) {
      setState({ ...state, board: boards[0] });
    }
  }, [boardsLoading]);

  if (projectsLoading || projectLoading || boardsLoading) return <LoadingIndicator />;

  if (!project) {
    return <Redirect to="/not-found" />;
  }

  const ProjectProps = {
    pathname,
    projects,
    project,
    boards,
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
