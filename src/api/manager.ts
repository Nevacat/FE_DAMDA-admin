import { instance } from './instance';

export const getManagers = async (status: string) => {
  const response = await instance.get<ManagerType[]>(`/admin/manager?status=${status}`);
  return response.data;
};
