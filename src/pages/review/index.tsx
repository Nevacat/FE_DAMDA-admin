import React from 'react';
import ReviewLayout from '@/components/review/ReviewLayout';
import { getReviews } from '@/api/review';

// export const getStaticProps = async () => {
//   try {
// const reviews = getReviews();
//     return { props: { reviews }, revalidate: 60 * 60 };
//   } catch (error) {
//     return { props: { review: null }, revalidate: 60 };
//   }
// };

function ReviewPage() {
  return <ReviewLayout />;
}

export default ReviewPage;
