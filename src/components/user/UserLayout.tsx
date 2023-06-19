import React from 'react';
import UserTable from './UserTable';
import { PageTitle } from '@/styles/common/PageTitle';

function UserLayout() {
  return (
    <>
      <PageTitle>고객관리</PageTitle>
      <UserTable />
    </>
  );
}

export default UserLayout;
