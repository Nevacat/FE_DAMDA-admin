import { UserListRes } from '@/types/api/user';
import { instance } from './instance';

export const getUserList = async (query?: string | undefined) => {
  const res = await instance.get<UserListRes>('/member/list', {
    params: query && { list: query },
  });
  console.log(res);
  return res;
};
