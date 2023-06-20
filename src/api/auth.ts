import { FieldValues } from 'react-hook-form';
import { instance } from './instance';
import { UserRes } from '@/types/api/auth';

export const login = async (data: FieldValues) => {
  const res = await instance.post('/admin/login',data);
  return res;
};

/**
 * @description: 헤더에 담긴 토큰을 검증하고, 유저정보를 받아옴
 */
export const validateToken = async () => {
  try{
    const response = await instance.get<UserRes>('/auth/me');
    console.log(response);
    return response.data;
  } catch {
    console.log('로그아웃 상태입니다. 로그인해주세요.')
  }
};
