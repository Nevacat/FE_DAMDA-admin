import axios, { AxiosRequestConfig } from 'axios';

const getAxiosInstance = () => {
  const config: AxiosRequestConfig = {
    baseURL: 'https://api.damda.store/api/v1/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://api.damda.store',
      'Access-Control-Allow-Credentials': true,
    },
    withCredentials: true,
  };

  const instance = axios.create(config);

  return instance;
};

export const instance = getAxiosInstance();
