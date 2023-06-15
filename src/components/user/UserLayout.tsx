import React from 'react';
import * as S from '@/styles/pages/user.style';
import UserTable from './UserTable';

function UserLayout() {
  return (
    <S.UserPageContainer>
      <S.PageTitle>고객관리</S.PageTitle>
      <UserTable />
    </S.UserPageContainer>
  );
}

export default UserLayout;
