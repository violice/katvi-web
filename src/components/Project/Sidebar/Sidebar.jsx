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

const Sidebar = ({
  pathname, projects, project, boards, board, onBoardChange,
}) => (
  <Container>
    <Left>
      <Link to="/secure">
        <Logo type="short" size={{ width: '48px', height: '64px' }} />
      </Link>
      {projects.slice(0, 5).map(({ id, name }) => (
        <Thumb
          key={id}
          active={pathname.includes(`/projects/${id}`)}
          to={`/secure/projects/${id}/board`}
        >
          {name.split(' ').slice(0, 2).map(word => word[0].toUpperCase()).join('')}
        </Thumb>
      ))}
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
      <ProjectHeader to={`/secure/projects/${project.id}/settings`}>
        {project.name}
        <Settings />
      </ProjectHeader>
      <Select
        items={boards.map(b => ({ ...b, icon: ViewColumn }))}
        labelKey="name"
        valueKey="id"
        iconKey="icon"
        value={{ ...board, icon: ViewList }}
        onSelect={(_, { icon, ...selectedBoard }) => onBoardChange(selectedBoard)}
      />
      <SidebarItem active={pathname.includes('/board')} to={`/secure/projects/${project.id}/board`}>
        <ViewColumn />
        Доска Kanban
      </SidebarItem>
      <SidebarItem active={pathname.includes('/reports')} to={`/secure/projects/${project.id}/reports`}>
        <Timeline />
          Отчеты
      </SidebarItem>
      <SidebarItem active={pathname.includes('/docs')} to={`/secure/projects/${project.id}/docs`}>
        <WebAsset />
          Документация
      </SidebarItem>
      <SidebarItem active={pathname.includes('/tags')} to={`/secure/projects/${project.id}/tags`}>
        <BookmarkBorder />
          Теги
      </SidebarItem>
      <SidebarItem to="">
        <LinkIcon />
          Ссылка 1
      </SidebarItem>
      <SidebarItem to="">
        <LinkIcon />
          Ссылка 2
      </SidebarItem>
    </Right>
  </Container>
);

Sidebar.propTypes = {
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired,
  boards: PropTypes.array.isRequired,
  board: PropTypes.object.isRequired,
  onBoardChange: PropTypes.func.isRequired,
};

export default Sidebar;
