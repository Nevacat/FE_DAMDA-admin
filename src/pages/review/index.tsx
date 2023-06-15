import React from 'react';
import ReviewLayout from '@/components/review/ReviewLayout';
import { getReviews } from '@/api/review';
import { ReviewData } from '@/types/api/review';

interface ReviewProps {
  reviews: ReviewData[];
}

// export const getStaticProps = async () => {
//   try {
//     const reviews = getReviews();
//     return { props: { reviews }, revalidate: 60 * 60 };
//   } catch (error) {
//     return { props: { review: null }, revalidate: 60 };
//   }
// };

function ReviewPage({ reviews }: ReviewProps) {
  return <ReviewLayout />;
}

export default ReviewPage;
