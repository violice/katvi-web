import React from 'react';
import PropTypes from 'prop-types';

import { General } from 'components/ProjectSettings';
import { useApi } from 'utils';

const GeneralContainer = ({ project, onProjectChange }) => {
  const [{ loading }, request] = useApi();

  const editProject = body => request({
    method: 'patch',
    url: `/project/${project.id}`,
    body,
    onSuccess: editedProject => onProjectChange({ ...project, ...editedProject }),
  });


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
