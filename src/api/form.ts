import { instance } from '@/api/instance';
import { GetAdminFormList, GetLocations, putCategory, putFormType } from '@/types/api/form';

export const getAdminFormList = async () => {
  const res = await instance.get<GetAdminFormList>('/admin/form/list');
  return res.data.data;
};

export const getServiceAvailableLocation = async () => {
  const res = await instance.get<GetLocations>('/activity/locations');
  return res.data.data;
};

export const putCategoryList = async ({ questionNumber, data }: putCategory) => {
  const res = await instance.put(`/admin/form/${questionNumber}/add/category`, { data });
  return res.data.data;
};

export const putForm = async ({ data }: putFormType) => {
  const res = await instance.put(`/admin/form/${data.questionNumber}`, {
    ...data,
  });
  return res.data.data;
};
