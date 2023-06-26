import React from 'react';
import UserTable from './UserTable';
import { PageTitle } from '@/styles/common/PageTitle';
import { PaginationContainer } from '../common/PaginationContainer/style';
import Pagination from 'react-js-pagination';
import { SearchForm } from '@/styles/common/SearchForm';

interface UserLayoutProp {
  page: {
    page: number;
    totalCount: number;
  };
  searchInput: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onPaging: (page: number) => void;
}

function UserLayout({ page, searchInput, onChangeInput, onSubmitSearch, onPaging }: UserLayoutProp) {
  return (
    <>
      <PageTitle>고객관리</PageTitle>
      <SearchForm onSubmit={onSubmitSearch}>
        <input onChange={onChangeInput} type="text" placeholder="이름으로 검색" maxLength={20} value={searchInput} />
      </SearchForm>
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
