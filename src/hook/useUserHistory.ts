import { getUserHistory } from '@/api/user';
import { UserHistoryRes } from '@/types/api/user';
import { useMutation } from '@tanstack/react-query';

const useUserHistory = (onSuccess: (data: UserHistoryRes) => void) => {
  const { mutate, isLoading } = useMutation((params: { memberId: number; page: number }) => getUserHistory(params), {
    onSuccess,
    onError: () => console.log('유저 예약목록을 가져오는데 실패하였습니다'),
  });

  return { mutate, isLoading };
};

export default useUserHistory;
