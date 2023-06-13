import { instance } from './instance';
import { LoginRes, UserRes } from '@/types/api/auth';

/**
 * @description: 인가코드를 받아 AccessToken을 요청
 * @param {string} code : 인가코드
 * @return 로그인정보 data
 */
export const getToken = async (code: string) => {
  try {
    const response = await instance.get<LoginRes>(`/member/code?code=${code}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch access token from Kakao');
  }
};

/**
 * @description: 헤더에 담긴 토큰을 검증하고, 유저정보를 받아옴
 */
export const validateToken = async () => {
  const response = await instance.get<UserRes>('/auth/me');
  console.log(response);
  return response.data;
};
