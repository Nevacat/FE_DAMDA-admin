import { ReservationFormDetailRes, UserHistoryRes, UserListRes } from '@/types/api/user';
import { instance } from './instance';

export const getUserList = async (query?: string) => {
  const res = await instance.get<UserListRes>('/member/list', {
    params: query && { search: query },
  });
  console.log(res);
  return res.data;
};

export const getUserHistory = async ({ memberId, page }: { memberId: number; page: number }) => {
  console.log(memberId + '/' + page);
  const res = await instance.get<UserHistoryRes>(`/member/reservation`, {
    params: {
      memberId,
      page,
    },
  });
  console.log(res);
  return res.data;
};

export const getReservationFormDetail = async (id: number) => {
  const res = await instance.get<ReservationFormDetailRes>(`/member/submit/form?formId=${id}`);
  console.log(res);
  return res.data;
};
