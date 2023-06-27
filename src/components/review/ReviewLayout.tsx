import React from 'react';
import ReviewTable from './ReviewTable';
import Image from 'next/image';
import Pagination from 'react-js-pagination';
import { PaginationContainer } from '../common/PaginationContainer/style';
import { PageHeader, PageTitle } from '@/styles/common/PageTitle';
import Link from 'next/link';
import { ReviewData } from '@/types/api/review';

interface ReviewProps {
  reviews: ReviewData[];
  page: { page: number; totalCount: number };
  onPaging: (page: number) => void;
}

function ReviewLayout({ reviews, page, onPaging }: ReviewProps) {
  return (
    <>
      <PageHeader>
        <PageTitle>고객 후기</PageTitle>
        <Link href={'/review/create'}>
          <Image src="/icons/circle_plus.svg" alt="후기등록" width={24} height={24} />
        </Link>
      </PageHeader>
      <ReviewTable reviews={reviews} />
      <PaginationContainer>
        <Pagination
          activePage={page.page}
          itemsCountPerPage={10}
          totalItemsCount={page.totalCount}
          hideFirstLastPages={true}
          linkClassPrev="prev"
          linkClassNext="next"
          onChange={onPaging}
        />
      </PaginationContainer>
    </>
  );
}

export default ReviewLayout;
