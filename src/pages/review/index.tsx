import React, { createContext, useEffect, useState } from 'react';
import ReviewLayout from '@/components/review/ReviewLayout';
import { ReviewData, ReviewRes } from '@/types/api/review';
import useReview from '@/hook/useReview';
import { UseMutateFunction } from '@tanstack/react-query';

interface ReviewContextVal {
  reviewMutate: UseMutateFunction<ReviewRes, unknown, number | undefined, unknown>
}

export const ReviewContext = createContext<ReviewContextVal | null>(null)

function ReviewPage() {
  const [reviews, setReviews] = useState<ReviewData[]>([])
  const [page, setPage] = useState({page: 1, totalCount: 10})
  const reviewMutate = useReview((data: ReviewRes) => {
    // const currentData = data.data
    // setReviews(currentData.content)
    // setPage({ ...page, totalCount: currentData.totalElements})
    setReviews([
      {
        reviewId: 1,
        name: "김디버깅",
        address: "경기도 하남시 망월동",
        title: "친절하게 정리해주셔서 너무 고맙습니다~~!!",
        content: "친절하게 정리해주셔서 너무 고맙습니다~~!!",
        createdAt: "2023-06-15",
        best: false
    },
      {
        reviewId: 2,
        name: "박디버깅",
        address: "경기도 남양주시 별내동",
        title: "열다를 만나고 삶의 질이 달라졌어요!!",
        content: "열다를 만나고 삶의 질이 달라졌어요!!",
        createdAt: "2023-06-15",
        best: true
    },
    ])
    setPage({ ...page, totalCount: 20})
  })

  const onPaging = (selectedPage: number) => {
    setPage({ ...page, page: selectedPage });
    reviewMutate(selectedPage - 1);
  };

  useEffect(() => {
    reviewMutate(0)
  }, [])

  return (
    <ReviewContext.Provider value={{reviewMutate}}>
      <ReviewLayout reviews={reviews} page={page} onPaging={onPaging} />
    </ReviewContext.Provider>
  );
}

export default ReviewPage;
