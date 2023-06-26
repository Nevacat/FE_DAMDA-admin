import { ManagerHistoryRes, ManagerRegionRequest } from '@/types/api/manager';
import { instance } from './instance';

export const getManagers = async (status: string) => {
  const response = await instance.get(`/admin/manager?status=${status}`);
  return response.data.data.content;
};

export const putManagerInfo = async ({ id, formData }: any) => {
  const response = await instance.put(`/admin/manager/${id}/info`, formData);
  return response.data;
};

export const getManagerHistory = async ({ managerId, page }: { managerId: number; page: number }) => {
  const res = await instance.get<ManagerHistoryRes>(`/matching/reservation/${managerId}`, {
    params: {
      page,
      size: 5,
    },
  });
  console.log(res);
  return res.data;
};

export const putManagerRegion = async ({ id, region }: ManagerRegionRequest) => {
  const response = await instance.put(`/admin/region/add/${id}`, region);
  return response.data;
};

export const deleteManagerRegion = async ({ id, region }: ManagerRegionRequest) => {
  const response = await instance.put(`/admin/region/delete/${id}`, region);
  return response.data;
};

export const putManagerStatus = async ({ id, status }: { id: number; status: { currStatus: string } }) => {
  const response = await instance.put(`/admin/manager/${id}/status`, status);
};
