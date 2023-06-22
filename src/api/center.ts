import { FAQData } from '@/types/api/center';
import { instance } from './instance';

export const getCenterData = async () => {
  const response = await instance.get('/member/qna');
  return response.data;
};

export const postFAQData = async (formData: FAQData) => {
  const response = await instance.post<boolean>('/admin/qna', formData);
  return response.data;
};

export const deleteFAQData = async (id: number) => {
  const response = await instance.delete<boolean>(`/admin/qna/${id}`);
  return response.data;
};

export const getFAQData = async (id: number) => {
  const response = await instance.get(`/member/qna/${id}`);
  return response.data;
};

export const putFAQData = async ({ id, faq }: { id: number; faq: FAQData }) => {
  const response = await instance.put<boolean>(`/admin/qna/${id}`, faq);
  return response.data;
};
