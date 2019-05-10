import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MoreHoriz,
  HelpOutline,
  AccountCircle,
  Settings,
  ViewList,
  ViewColumn,
  Timeline,
  WebAsset,
  BookmarkBorder,
  Link as LinkIcon,
} from 'rmdi';

import { Logo, Select } from 'components/Common';

import {
  Container,
  Left,
  Thumb,
  BottomItems,
  Right,
  ProjectHeader,
  SidebarItem,
} from './styles';

const BOARDS = [
  {
    label: 'Board 1',
    value: 1,
    icon: ViewColumn,
  },
  {
    label: 'Board 2',
    value: 2,
    icon: ViewColumn,
  },
  {
    label: 'Board 3',
    value: 3,
    icon: ViewColumn,
  },
];

const Sidebar = ({ pathname }) => (
  <Container>
    <Left>
      <Link to="/secure">
        <Logo type="short" size={{ width: '48px', height: '64px' }} />
      </Link>
      <Thumb active={pathname.includes('/projects/1')} to="/secure/projects/1">P</Thumb>
      <Thumb active={pathname.includes('/projects/2')} to="/secure/projects/2">EU</Thumb>
      <Thumb active={pathname.includes('/projects/3')} to="/secure/projects/3">EA</Thumb>
      <Link to="/secure/projects">
        <MoreHoriz size="48" color="white" />
      </Link>
      <BottomItems>
        <Link to="/secure/help">
          <HelpOutline size="48" color="white" />
        </Link>
        <Link to="/secure/account">
          <AccountCircle size="48" color="white" />
        </Link>
      </BottomItems>
    </Left>
    <Right>
      <ProjectHeader>
        Project
        <Settings />
      </ProjectHeader>
      <Select items={BOARDS} labelKey="label" valueKey="value" iconKey="icon" value={{ ...BOARDS[0], icon: ViewList }} />
      <SidebarItem active={pathname.includes('/board')} to="/secure/projects/1/board">
        <ViewColumn />
        Kanban board
      </SidebarItem>
      <SidebarItem active={pathname.includes('/reports')} to="/secure/projects/1/reports">
        <Timeline />
        Reports
      </SidebarItem>
      <SidebarItem active={pathname.includes('/docs')} to="/secure/projects/1/docs">
        <WebAsset />
        Docs
      </SidebarItem>
      <SidebarItem active={pathname.includes('/tags')} to="/secure/projects/1/tags">
        <BookmarkBorder />
        Tags
      </SidebarItem>
      <SidebarItem to="">
        <LinkIcon />
        Link 1
      </SidebarItem>
      <SidebarItem to="">
        <LinkIcon />
        Link 2
      </SidebarItem>
    </Right>
  </Container>
);

Sidebar.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Sidebar;
