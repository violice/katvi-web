import React from 'react';
import PropTypes from 'prop-types';
import {
  Dashboard, FolderOpen, HelpOutline, AccountCircle,
} from 'rmdi';

import { Logo } from 'components/Common';

import { Container, SidebarItem, BottomItems } from './styles';

const Sidebar = ({ pathname }) => (
  <Container>
    <Logo inverted />
    <SidebarItem active={pathname.includes('/dashboard')} to="/dashboard">
      <Dashboard />
        Dashboard
    </SidebarItem>
    <SidebarItem active={pathname.includes('/projects')} to="/projects">
      <FolderOpen />
        Projects
    </SidebarItem>
    <BottomItems>
      <SidebarItem active={pathname.includes('/help')} to="/help">
        <HelpOutline />
          Help
      </SidebarItem>
      <SidebarItem active={pathname.includes('/account')} to="/account">
        <AccountCircle />
          Account Name
      </SidebarItem>
    </BottomItems>
  </Container>
);

Sidebar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Sidebar;
