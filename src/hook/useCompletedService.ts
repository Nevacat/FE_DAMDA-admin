import { getCompletedServiceData } from '@/api/service';
import { CompletedServiceRes } from '@/types/api/service';
import { useMutation } from '@tanstack/react-query';

const useCompletedService = (onSuccess: (data: CompletedServiceRes) => void) => {
  const { mutate } = useMutation((reservationId: number) => getCompletedServiceData(reservationId), {
    onSuccess,
    onError: (error) => {
      alert('이미 리뷰작성이 완료 된 사용자입니다');
    },
  });

  return mutate;
};

export default useCompletedService;
