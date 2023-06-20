import { FieldValues } from 'react-hook-form';
import { instance } from './instance';
import { UserRes } from '@/types/api/auth';

export const login = async (data: FieldValues) => {
  const res = await instance.post('/admin/login', data);
  return res;
};

/**
 * @description: 헤더에 담긴 토큰을 검증하고, 유저정보를 받아옴
 */
export const validateToken = async () => {
  const response = await instance.get<UserRes>('/auth/me');
  return response.data;
};
