import { CenterData, FAQData } from '@/types/api/center';
import { instance } from './instance';

export const getCenterData = async () => {
  const response = await instance.get<CenterData[]>('/member/qna');
  return response.data;
};

export const postFAQData = async (formData: FAQData) => {
  const response = await instance.post<boolean>('/admin/qna', formData);
  return response.data;
};
