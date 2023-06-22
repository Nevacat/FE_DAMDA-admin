import { CenterData } from '@/types/api/center';
import axios from 'axios';

export const getCenterData = async () => {
  const response = await axios.get<CenterData[]>('/member/qna');
  return response.data;
};
