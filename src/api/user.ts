import { ReservationFormDetailRes, UserHistoryRes, UserListRes } from '@/types/api/user';
import { instance } from './instance';

export const getUserList = async (params: { page: number; search: string }) => {
  const res = await instance.get<UserListRes>('/member/list', {
    params,
  });
  console.log(res);
  return res.data;
};

export const getUserHistory = async ({ memberId, page }: { memberId: number; page: number }) => {
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

export const modifyMemo = async (memberId: number, memo: string) => {
  const res = await instance.put('/member/memo/modify', {
    memberId,
    memo,
  });
  console.log(res);
  return res.data;
};
