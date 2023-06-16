import { ServiceRes } from '@/types/api/service';
import { instance } from './instance';

export const getCompletedServices = async (page?: number, size?: number) => {
  const res = await instance.get<ServiceRes>('/service/complete/list', {
    params: { page: page ? page : 0, size: size ? size : 4 },
  });
  return res.data;
};
