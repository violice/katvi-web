import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
} from 'components/Common';

const Settings = ({ opened, onClose }) => (
  <Modal
    opened={opened}
    header="Настройки"
    onClose={onClose}
  >
    Контент
  </Modal>
);

Settings.propTypes = {
  opened: PropTypes.bool.isRequired,
  // loading: PropTypes.bool.isRequired,
  // request: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Settings;
