import { getManagerHistory } from '@/api/manager';
import { ManagerHistoryRes } from '@/types/api/manager';
import { useMutation } from '@tanstack/react-query';

const useManagerHistory = (onSuccess: (data: ManagerHistoryRes) => void) => {
  const { mutate, isLoading } = useMutation(
    (params: { managerId: number; page: number }) => getManagerHistory(params),
    {
      onSuccess,
      onError: () => console.log('매니저 예약목록을 가져오는데 실패하였습니다'),
    },
  );

  return { mutate, isLoading };
};

export default useManagerHistory;
