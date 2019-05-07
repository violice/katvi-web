import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';
import { Container, Content } from './styles';

const UserSpace = ({ children, location: { pathname } }) => (
  <Container>
    <Sidebar pathname={pathname} />
    <Content>
      {children}
    </Content>
  </Container>
);

UserSpace.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default UserSpace;
