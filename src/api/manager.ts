import { instance } from './instance';

export const getManagers = async (status: string) => {
  const response = await instance.get(`/admin/manager?status=${status}`);
  return response.data;
};
