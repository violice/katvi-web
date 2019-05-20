import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

const Secure = ({ children, pathname, user }) => (
  <Container sidebar={!pathname.includes('projects/')}>
    {!pathname.includes('projects/') && <Sidebar pathname={pathname} user={user} />}
    <Content>
      {children}
    </Content>
  </Container>
);

Secure.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default Secure;
