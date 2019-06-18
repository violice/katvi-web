import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Common';

import { Doc } from './Doc';

import {
  Container,
  Header,
  Content,
  Menu,
  MenuItem,
} from './styles';

const Docs = ({
  docs,
  selectedDoc,
  selectDoc,
  createDocument,
  editDocument,
}) => (
  <Container>
    <Header>
      Документы
      <Button size="small" onClick={() => selectDoc({ name: 'Новый документ', content: '' })}>Добавить документ</Button>
    </Header>
    <Content>
      <Menu>
        {docs.map(item => (
          <MenuItem
            key={item.id}
            active={selectedDoc && item.id === selectedDoc.id}
            onClick={() => selectDoc(item)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
      {selectedDoc && (
      <Doc
        doc={selectedDoc}
        createDocument={createDocument}
        editDocument={editDocument}
      />
      )}
    </Content>
  </Container>
);

Docs.propTypes = {
  docs: PropTypes.array.isRequired,
  selectedDoc: PropTypes.object.isRequired,
  selectDoc: PropTypes.func.isRequired,
  createDocument: PropTypes.func.isRequired,
  editDocument: PropTypes.func.isRequired,
};

export default Docs;
