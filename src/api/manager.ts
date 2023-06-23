import { instance } from './instance';

export const getManagers = async (status: string) => {
  const response = await instance.get<ManagerType[]>(`/admin/manager?status=${status}`);
  return response.data;
};

export const putManagerInfo = async ({ id, formData }: any) => {
  const response = await instance.put(`/admin/manager${id}/info`, formData);
  return response.data;
};
