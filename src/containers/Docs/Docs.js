import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Docs } from 'components';
import { LoadingIndicator } from 'components/Common';
import { useApi } from 'utils';
import { useStore } from 'store';

const DocsContainer = () => {
  const [{ project }] = useStore();
  const [selectedDoc, selectDoc] = useState();
  const [{ loading: loadingDocs, data: docs }, reload] = useApi({ url: 'doc', queryParams: { project: project.id } }, { loading: true });
  const [{ loading: loadingDoc }, request] = useApi();

  const createDocument = body => request({
    url: 'doc',
    method: 'post',
    body: { ...body, project: project.id },
    onSuccess: (createdDocuement) => {
      selectDoc(createdDocuement);
      reload();
    },
  });

  const editDocument = (id, body) => request({
    url: `doc/${id}`,
    method: 'patch',
    body,
    onSuccess: (editedDocument) => {
      selectDoc(editedDocument);
      reload();
    },
  });

  const DocsProps = {
    docs,
    selectedDoc,
    selectDoc,
    createDocument,
    editDocument,
  };

  if (loadingDocs || loadingDoc) {
    return <LoadingIndicator />;
  }

  return <Docs {...DocsProps} />;
};

DocsContainer.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default DocsContainer;
