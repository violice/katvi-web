import React from 'react';

import { ProjectSettings } from 'components';
import { useStore } from 'store';

const ProjectContainer = () => {
  const [state, setState] = useStore();

  const onProjectChange = (project) => {
    setState({ ...state, project });
  };

  return (
    <ProjectSettings
      project={state.project}
      onProjectChange={onProjectChange}
    />
  );
};

export default React.memo(ProjectContainer);
