import React, { createContext, useEffect, useState } from 'react';
import ReviewLayout from '@/components/review/ReviewLayout';
import { ReviewData, ReviewRes } from '@/types/api/review';
import useReview from '@/hook/useReview';
import { UseMutateFunction } from '@tanstack/react-query';

interface ReviewContextVal {
  reviewMutate: UseMutateFunction<ReviewRes, unknown, number | undefined, unknown>;
}

export const ReviewContext = createContext<ReviewContextVal | null>(null);

function ReviewPage() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [page, setPage] = useState({ page: 1, totalCount: 10 });
  const reviewMutate = useReview((data: ReviewRes) => {
    const currentData = data.data;
    setReviews(currentData.content);
    setPage({ ...page, totalCount: currentData.totalElements });
  });

  const onPaging = (selectedPage: number) => {
    setPage({ ...page, page: selectedPage });
    reviewMutate(selectedPage - 1);
  };

  useEffect(() => {
    reviewMutate(0);
  }, []);

  return (
    <ReviewContext.Provider value={{ reviewMutate }}>
      <ReviewLayout reviews={reviews} page={page} onPaging={onPaging} />
    </ReviewContext.Provider>
  );
}

export default ReviewPage;
