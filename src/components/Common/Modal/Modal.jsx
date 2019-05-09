import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  Overlay, Container, Header, Content, Footer,
} from './styles';

const ROOT_NODE = document.getElementById('root');
const MODAL_NODE = document.getElementById('modal');

const Modal = ({
  children, header, footer, opened, onClose,
}) => {
  useEffect(() => {
    if (opened) {
      ROOT_NODE.style.filter = 'blur(5px)';
    }
  }, [opened]);
  if (opened) {
    return ReactDOM.createPortal(
      <Overlay onClick={() => {
        ROOT_NODE.style.filter = 'none';
        onClose();
      }}
      >
        <Container onClick={e => e.stopPropagation()}>
          {header && <Header>{header}</Header>}
          <Content>{children}</Content>
          {footer && <Footer>{footer}</Footer>}
        </Container>
      </Overlay>,
      MODAL_NODE,
    );
  }
  return null;
};

Modal.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  header: null,
  children: null,
  footer: null,
  opened: false,
  onClose: () => { },
};

export default React.memo(Modal);
