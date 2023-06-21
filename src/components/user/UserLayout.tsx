import React from 'react';
import UserTable from './UserTable';
import { PageTitle } from '@/styles/common/PageTitle';
import { PaginationContainer } from '../common/PaginationContainer/style';
import Pagination from 'react-js-pagination';

interface UserLayoutProp {
  page: {
    page: number;
    totalCount: number;
  };
  onPaging: (page: number) => void;
}

function UserLayout({ page, onPaging }: UserLayoutProp) {
  return (
    <>
      <PageTitle>고객관리</PageTitle>
      <UserTable />
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

export default UserLayout;
