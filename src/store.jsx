import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const StoreContext = React.createContext();

const StoreProvider = ({ children, initState }) => {
  const [state, setState] = useState(initState);

  // FIXME: HACK...
  const refresh = JSON.stringify(state);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const storeKeys = Object.keys(state);
      if (storeKeys.length > 0) {
        console.group('%cStore Updated', 'color:#00873D');
        storeKeys.forEach((key) => {
          console.log(`%c${key}`, 'font-weight:bold', state[key]);
        });
        console.groupEnd();
      }
    }
  }, [refresh]);

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node,
  initState: PropTypes.object,
};

StoreProvider.defaultProps = {
  children: null,
  initState: {},
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
