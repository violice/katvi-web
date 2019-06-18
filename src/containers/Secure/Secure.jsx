import React from 'react';
import PropTypes from 'prop-types';

import { useApi } from 'utils';
import { useStore } from 'store';
import { Secure } from 'components';
import { LoadingIndicator } from 'components/Common';

const SecureContainer = ({ history: { replace }, location: { pathname }, children }) => {
  if (!document.cookie.includes('katvi-token')) {
    replace('/');
  }

  const [state, setState] = useStore();

  const [{ loading, data, error }] = useApi({
    url: '/user/current',
    onSuccess: user => setState({ ...state, user }),
  }, { loading: true });

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    });
    replace('/login');
  }

  return (
    <Secure pathname={pathname} user={data}>{children}</Secure>
  );
};

SecureContainer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(SecureContainer);
