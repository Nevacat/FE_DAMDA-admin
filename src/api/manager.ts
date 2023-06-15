import { instance } from './instance';

export const getActiveManagers = async () => {
  const response = await instance.get('/admin/manager/active');
  return response.data;
};
