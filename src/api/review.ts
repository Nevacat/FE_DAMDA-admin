import { ReviewRes } from '@/types/api/review';
import { instance } from './instance';

export const getReviews = async () => {
  const res = await instance.get<ReviewRes>('/admin/review/list');
  console.log(res);
  return res.data;
};

export const postReview = async (reservationId: number) => {
  const res = await instance.post(`/review/auto/${reservationId}`);
  console.log(res);
  return res.data;
};

export const deleteReview = async (reviewId: number) => {
  const res = await instance.delete(`/review/${reviewId}`);
  console.log(res);
  return res.data;
};

export const selectBestReview = async (reviewId: number) => {
  const res = await instance.put(`/review/best/${reviewId}`);
  console.log(res);
  return res.data;
};
