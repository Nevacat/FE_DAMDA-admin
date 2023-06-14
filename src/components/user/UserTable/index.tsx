import React from 'react';
import * as T from '@/styles/common/table.style';
import UserItem from './UserItem';

function UserTable() {
  return (
    <T.TableContainer>
      <T.Table>
        <T.Thead>
          <T.Tr>
            <T.Th>이름</T.Th>
            <T.Th>연락처</T.Th>
            <T.Th>주소</T.Th>
            <T.Th>서비스 상태</T.Th>
            <T.Th>생성일</T.Th>
            <T.Th>메모</T.Th>
            <T.Th>추천인코드</T.Th>
            <T.Th>예약 내역</T.Th>
          </T.Tr>
        </T.Thead>
        <T.Tbody>
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </T.Tbody>
      </T.Table>
    </T.TableContainer>
  );
}

export default UserTable;
