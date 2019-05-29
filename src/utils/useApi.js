import { useReducer, useEffect } from 'react';
import Api from './api';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
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

const request = (dispatch, initParams) => async (requestParams) => {
  dispatch({ type: 'REQUEST' });

  const params = requestParams || initParams;

  const {
    method = 'get',
    url,
    queryParams,
    body,
    onSuccess,
    onError,
  } = params;

  try {
    const data = await Api[method](url, body || queryParams);

    if (onSuccess) onSuccess(data);
    dispatch({ type: 'REQUEST_SUCCESS', payload: data });
  } catch (error) {
    if (onError) onSuccess(error);
    dispatch({ type: 'REQUEST_ERROR', payload: error });
  }
};

const useApi = (initParams, initState = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: initState.loading || DEFAULT_STATE.loading,
    error: initState.error || DEFAULT_STATE.error,
    data: initState.data || DEFAULT_STATE.data,
  });

  // FIXME: HACK...
  const refresh = JSON.stringify(initParams);

  useEffect(() => {
    if (initParams) {
      request(dispatch, initParams)();
    }
  }, [refresh]);

  return [state, request(dispatch, initParams)];
};

export default useApi;
