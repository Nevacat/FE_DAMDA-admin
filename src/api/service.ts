import { CompletedServiceRes, ServiceRes } from '@/types/api/service';
import { instance } from './instance';

export const getCompletedServices = async (page?: number) => {
  const params = { page: page ? page : 0, size: 4 };
  const res = await instance.get<ServiceRes>('/service/complete/list', {
    params,
  });
  return res.data;
};

export const getCompletedServiceData = async (reservationId: number) => {
  const res = await instance.get<CompletedServiceRes>(`/review/auto/${reservationId}`);
  return res.data;
};

export const getCompletedServiceImages = async (reservationId: number) => {
  const res = await instance.get(`/service/complete/detail/${reservationId}`);
  return res.data;
};
