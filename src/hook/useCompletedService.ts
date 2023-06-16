import { getCompletedServiceData } from '@/api/service';
import { CompletedServiceRes } from '@/types/api/service';
import { useMutation } from '@tanstack/react-query';

const useCompletedService = (onSuccess: (data: CompletedServiceRes) => void) => {
  const { mutate } = useMutation((reservationId: number) => getCompletedServiceData(reservationId), {
    onSuccess,
    onError: onSuccess, //임시 (테스트용)
  });

  return mutate;
};

export default useCompletedService;
