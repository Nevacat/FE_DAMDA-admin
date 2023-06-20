import React from 'react';
import UserTable from './UserTable';
import { PageTitle } from '@/styles/common/PageTitle';
import { PaginationContainer } from '../common/PaginationContainer/style';
import Pagination from 'react-js-pagination';

function UserLayout() {
  return (
    <>
      <PageTitle>고객관리</PageTitle>
      <UserTable />
      <PaginationContainer>
        <Pagination
          activePage={1}
          itemsCountPerPage={10}
          totalItemsCount={10}
          hideFirstLastPages={true}
          linkClassPrev="prev"
          linkClassNext="next"
          onChange={() => {}}
        />
      </PaginationContainer>
    </>
  );
}

export default UserLayout;
