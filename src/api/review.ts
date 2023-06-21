import { ReviewRes } from '@/types/api/review';
import { instance } from './instance';

export const getReviews = async (page?: number) => {
  const params = {
    page: page ? page : 0,
    size: 10,
  };
  const res = await instance.get<ReviewRes>('/admin/review/list', { params });
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

export const deleteReviewImage = async (imageId: number) => {
  const res = await instance.delete(`/review/image/${imageId}`);
  console.log(res);
  return res.data;
};
