import React from 'react';

import { ProjectSettings } from 'components';
import { useStore } from 'store';

const ProjectSettingsContainer = () => {
  const [{ project }] = useStore();

  return (
    <ProjectSettings project={project} />
  );
};

export default React.memo(ProjectSettingsContainer);
