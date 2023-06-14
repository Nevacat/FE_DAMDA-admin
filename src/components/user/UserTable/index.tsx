import React from 'react';
import * as T from '@/styles/common/table.style';

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
          <T.Tr>
            <T.Td>홍길동</T.Td>
            <T.Td>010-0000-0000</T.Td>
            <T.Td>서울 동대문구</T.Td>
            <T.Td>매칭중</T.Td>
            <T.Td>2023-05-21 14:23</T.Td>
            <T.Td>최대여덟글자메모</T.Td>
            <T.Td>ASDE9B</T.Td>
            <T.Td>예약내역</T.Td>
          </T.Tr>
        </T.Tbody>
      </T.Table>
    </T.TableContainer>
  );
}

export default UserTable;
