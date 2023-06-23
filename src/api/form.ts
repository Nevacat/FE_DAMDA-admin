import { instance } from '@/api/instance';
import {
  DeleteCategory,
  GetAdminFormList,
  GetLocations,
  putCategory,
  putFormType,
  UpdateQuestionOrder,
} from '@/types/api/form';

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

export const deleteCategory = async ({ categoryNumber }: DeleteCategory) => {
  const res = await instance.delete(`/admin/form/${categoryNumber}/delete/category`);
  return res.data.data;
};

export const updateQuestionOrder = async ({ data }: UpdateQuestionOrder) => {
  const res = await instance.put(`/admin/form/order`, [...data]);
  return res.data.data;
};
