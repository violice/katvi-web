import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/`,
  withCredentials: true,
});

const createStringParams = (params = {}) => {
  if (Object.keys(params).length === 0) {
    return '';
  }
  const stringParams = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  return `?${stringParams}`;
};

const throwError = (response) => {
  if (response) {
    const { status, data: { error, message } } = response;
    const err = { code: status, message: error || message };
    throw err;
  }
  const err = { message: 'Server unavailable' };
  throw err;
};

export default {
  get: async (url, params) => {
    try {
      const { data } = await AxiosInstance.get(`${url}${createStringParams(params)}`);
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
  post: async (url, body) => {
    try {
      const { data } = await AxiosInstance.post(url, body);
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
  patch: async (url, body) => {
    try {
      const { data } = await AxiosInstance.patch(url, body);
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
  delete: async (url) => {
    try {
      const { data } = await AxiosInstance.delete(url);
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
};
