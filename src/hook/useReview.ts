import { getReviews } from '@/api/review';
import { ReviewRes } from '@/types/api/review';
import { useMutation } from '@tanstack/react-query';

const useReview = (onSuccess: (data: ReviewRes) => void) => {
  const { mutate } = useMutation((page?: number) => getReviews(page), {
    onSuccess,
    onError: onSuccess,
  });

  return mutate;
};

export default useReview;
