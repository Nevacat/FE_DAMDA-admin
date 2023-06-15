import React from 'react';
import * as S from '@/styles/pages/review.style';
import ReviewTable from './ReviewTable';
import Image from 'next/image';
import Pagination from 'react-js-pagination';
import { PaginationContainer } from '../common/PaginationContainer/style';

function ReviewLayout() {
  return (
    <S.ReviewPageContainer>
      <S.Header>
        <S.PageTitle>고객 후기</S.PageTitle>
        <Image src="/icons/circle_plus.svg" alt="후기등록" width={24} height={24} />
      </S.Header>
      <ReviewTable />
      <PaginationContainer>
        <Pagination
          activePage={1}
          itemsCountPerPage={2}
          totalItemsCount={30}
          hideFirstLastPages={true}
          linkClassPrev="prev"
          linkClassNext="next"
          onChange={() => {}}
        />
      </PaginationContainer>
    </S.ReviewPageContainer>
  );
}

export default ReviewLayout;
