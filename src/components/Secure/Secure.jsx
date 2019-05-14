import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

const Secure = ({ children, location: { pathname } }) => (
  <Container sidebar={!pathname.includes('projects/')}>
    {!pathname.includes('projects/') && <Sidebar pathname={pathname} />}
    <Content>
      {children}
    </Content>
  </Container>
);

Secure.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Secure;
