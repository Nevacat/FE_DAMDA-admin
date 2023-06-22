import { getCompletedServiceData } from '@/api/service';
import { CompletedServiceRes } from '@/types/api/service';
import { useMutation } from '@tanstack/react-query';

const useCompletedService = (onSuccess: (data: CompletedServiceRes) => void) => {
  const { mutate } = useMutation((reservationId: number) => getCompletedServiceData(reservationId), {
    onSuccess,
    onError: (error) => {
      console.log(error);
    },
  });

  return mutate;
};

export default useCompletedService;
