import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Main } from 'components';
import { useApi } from 'utils';
import { useStore } from 'store';

const MainContainer = ({ location: { pathname }, history: { replace } }) => {
  const [{ loading, data }, request] = useApi();
  const [state, setState] = useStore();

  useEffect(() => {
    if (data) {
      setState({ ...state, user: data });
      replace('/secure/dashboard');
    }
  }, [loading]);

  const MainProps = {
    pathname,
    replace,
    loading,
    request,
  };

  return <Main {...MainProps} />;
};

MainContainer.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default MainContainer;
