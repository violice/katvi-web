import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { General } from 'components/ProjectSettings';
import { useApi } from 'utils';

const GeneralContainer = ({ project, onProjectChange }) => {
  const [{ loading, data }, request] = useApi();

  const editProject = body => request({ method: 'patch', url: `/project/${project.id}`, body });

  useEffect(() => {
    if (!loading) {
      onProjectChange({ ...project, ...data });
    }
  }, [loading]);


  const GeneralProps = {
    project,
    loading,
    editProject,
  };

  return (
    <General {...GeneralProps} />
  );
};

GeneralContainer.propTypes = {
  project: PropTypes.object.isRequired,
  onProjectChange: PropTypes.func.isRequired,
};

export default React.memo(GeneralContainer);
