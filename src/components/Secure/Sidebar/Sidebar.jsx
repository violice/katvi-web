import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Dashboard, FolderOpen, HelpOutline, AccountCircle,
} from 'rmdi';

import { Logo } from 'components/Common';

import { Container, SidebarItem, BottomItems } from './styles';

const renderAccountName = ({
  firstName, lastName, username, email,
}) => {
  if (firstName && lastName) return `${firstName} ${lastName}`;
  return username || email;
};

const Sidebar = ({ pathname, user }) => (
  <Container>
    <Link to="/secure">
      <Logo type="inverted" />
    </Link>
    <SidebarItem active={pathname.includes('/dashboard')} to="/secure/dashboard">
      <Dashboard />
        Рабочий стол
    </SidebarItem>
    <SidebarItem active={pathname.includes('/projects')} to="/secure/projects">
      <FolderOpen />
        Проекты
    </SidebarItem>
    <BottomItems>
      <SidebarItem active={pathname.includes('/help')} to="/secure/help">
        <HelpOutline />
          Справка
      </SidebarItem>
      <SidebarItem active={pathname.includes('/account')} to="/secure/account">
        <AccountCircle />
        <div>{renderAccountName(user)}</div>
      </SidebarItem>
    </BottomItems>
  </Container>
);

Sidebar.propTypes = {
  pathname: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default Sidebar;
