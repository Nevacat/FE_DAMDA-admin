import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://api.damda.store/api/v1/',
  headers: {
    'Access-Control-Allow-Origin': 'https://api.damda.store',
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
};

const getAxiosInstance = () => {
  const instance = axios.create(config);

  return instance;
};

const getMultipartAxiosInstance = () => {
  const instance = axios.create(config);
  instance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  });
  return instance;
};

export const instance = getAxiosInstance();
export const multipartInstance = getMultipartAxiosInstance();
