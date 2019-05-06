import React from 'react';
import PropTypes from 'prop-types';

import { Overlay, Container } from './styles';

const Modal = ({ children, opened, onClose }) => {
  if (opened) {
    return (
      <Overlay onClick={() => onClose()}>
        <Container onClick={e => e.stopPropagation()}>
          {children}
        </Container>
      </Overlay>
    );
  }
  return null;
};

Modal.propTypes = {
  children: PropTypes.node,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  opened: false,
  onClose: () => { },
};

export default React.memo(Modal);
