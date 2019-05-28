import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { General } from 'containers/ProjectSettings';

import {
  Container,
  Header,
  Content,
  Menu,
  MenuItem,
} from './styles';

const MENU_ITEMS = [
  { label: 'Основные', value: 0 },
  { label: 'Доски', value: 1 },
  { label: 'Теги', value: 2 },
  { label: 'Ссылки', value: 3 },
  { label: 'Участники', value: 4 },
];

const ProjectSettings = ({ project, onProjectChange }) => {
  const [active, setActive] = useState(MENU_ITEMS[0]);
  return (
    <Container>
      <Header>
        {`${project.name} - Настройки`}
      </Header>
      <Content>
        <Menu>
          {MENU_ITEMS.map(item => (
            <MenuItem
              key={item.value}
              active={item.value === active.value}
              onClick={() => setActive(item)}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
        {(() => {
          switch (active.value) {
            case 0:
              return <General project={project} onProjectChange={onProjectChange} />;
            default:
              return null;
          }
        })()}
      </Content>
    </Container>
  );
};

ProjectSettings.propTypes = {
  project: PropTypes.object.isRequired,
  onProjectChange: PropTypes.func.isRequired,
};

export default ProjectSettings;
