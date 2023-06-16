import { getCompletedServices } from '@/api/service';
import { ServiceRes } from '@/types/api/service';
import { useMutation } from '@tanstack/react-query';

const useCompletedServices = (onSuccess: (data: ServiceRes) => void) => {
  const { mutate } = useMutation((page?: number) => getCompletedServices(page), {
    onSuccess,
  });

  return mutate;
};

export default useCompletedServices;
