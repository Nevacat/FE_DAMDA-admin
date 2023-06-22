import { CenterData } from '@/types/api/center';
import axios from 'axios';
import { instance } from './instance';

export const getCenterData = async () => {
  const response = await instance.get<CenterData[]>('/member/qna');
  return response.data;
};
