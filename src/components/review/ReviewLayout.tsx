import React from 'react';
import * as S from '@/styles/pages/review.style';
import ReviewTable from './ReviewTable';

function ReviewLayout() {
  return (
    <S.ReviewPageContainer>
      <S.PageTitle>고객 후기</S.PageTitle>
      <ReviewTable />
    </S.ReviewPageContainer>
  );
}

export default ReviewLayout;
