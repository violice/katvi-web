import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Dashboard, FolderOpen, HelpOutline, AccountCircle,
} from 'rmdi';

import { Logo } from 'components/Common';

import { Container, SidebarItem, BottomItems } from './styles';

const Sidebar = ({ pathname }) => (
  <Container>
    <Link to="/secure">
      <Logo type="inverted" />
    </Link>
    <SidebarItem active={pathname.includes('/dashboard')} to="/secure/dashboard">
      <Dashboard />
        Dashboard
    </SidebarItem>
    <SidebarItem active={pathname.includes('/projects')} to="/secure/projects">
      <FolderOpen />
        Projects
    </SidebarItem>
    <BottomItems>
      <SidebarItem active={pathname.includes('/help')} to="/secure/help">
        <HelpOutline />
          Help
      </SidebarItem>
      <SidebarItem active={pathname.includes('/account')} to="/secure/account">
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
