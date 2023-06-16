import React from 'react';
import * as S from '@/styles/pages/review.style';
import ReviewTable from './ReviewTable';
import Image from 'next/image';
import Pagination from 'react-js-pagination';
import { PaginationContainer } from '../common/PaginationContainer/style';
import { PageTitle } from '@/styles/common/PageTitle';
import Link from 'next/link';

function ReviewLayout() {
  return (
    <>
      <S.Header>
        <PageTitle>고객 후기</PageTitle>
        <Link href={'/review/create'}>
          <Image src="/icons/circle_plus.svg" alt="후기등록" width={24} height={24} />
        </Link>
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
    </>
  );
}

export default ReviewLayout;
