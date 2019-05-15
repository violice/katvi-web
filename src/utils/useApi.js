import { useState, useReducer, useEffect } from 'react';
import api from './api';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'RESET':
      return {
        loading: false,
        error: false,
        data: null,
      };
    default:
      return state;
  }
};

const DEFAULT_STATE = {
  loading: false,
  error: false,
  data: null,
};

const useApi = (initParams, initState = {}) => {
  const [params, setParams] = useState(initParams);

  const [state, dispatch] = useReducer(reducer, {
    loading: initState.loading || DEFAULT_STATE.loading,
    error: initState.error || DEFAULT_STATE.error,
    data: initState.data || DEFAULT_STATE.data,
  });

  const reset = () => dispatch({ type: 'RESET' });

  useEffect(() => {
    let canceled = false;

    const fetch = async () => {
      dispatch({ type: 'FETCH_INIT' });

      const {
        method,
        url,
        queryParams,
        body,
      } = params;

      let data;

      try {
        switch (method) {
          case 'post':
            data = await api.post(url, body);
            break;
          case 'patch':
            data = await api.patch(url, body);
            break;
          case 'delete':
            data = await api.delete(url);
            break;
          default:
            data = await api.get(url, queryParams);
            break;
        }

        if (!canceled) {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }
      } catch (error) {
        if (!canceled) {
          dispatch({ type: 'FETCH_ERROR', payload: error });
        }
      }
    };

    if (params) {
      fetch();
    }

    return () => {
      canceled = true;
    };
  }, [params]);

  return [{
    ...state,
    reset,
  }, setParams];
};

export default useApi;
