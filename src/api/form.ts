import { instance } from '@/api/instance';
import { GetAdminFormList, GetLocations } from '@/types/api/form';

export const getAdminFormList = async () => {
  const res = await instance.get<GetAdminFormList>('/admin/form/list');
  return res.data.data;
};

export const getServiceAvailableLocation = async () => {
  const res = await instance.get<GetLocations>('/activity/locations');
  return res.data.data;
};
