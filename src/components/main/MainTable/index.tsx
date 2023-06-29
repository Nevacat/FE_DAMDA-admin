import React from 'react';
import * as T from '@/styles/common/table.style';
import MainItem from '../MainItem';
import { MainData, Reservation } from '@/types/api/main';

interface MainTableProps {
  Content: Reservation[] | undefined;
  page:number;
}

function MainTable({ Content, page }: MainTableProps) {
  return (
    <T.TableContainer>
      <T.Table>
        <colgroup>
          <col width="3%" />
          <col width="10%" />
          <col width="5%" />
          <col width="10%" />
          <col width="20%" />
          <col width="10%" />
          <col width="7%" />
          <col width="3%" />
          <col width="3%" />
          <col width="3%" />
          <col width="8%" />
          <col width="5%" />
          <col width="3%" />
        </colgroup>
        <T.Thead>
          <T.Tr>
            <T.Th style={{ padding: '2px' }}>순번</T.Th>
            <T.Th>신청일자</T.Th>
            <T.Th>사용자 이름</T.Th>
            <T.Th>연락처</T.Th>
            <T.Th>주소</T.Th>
            <T.Th>예약일자</T.Th>
            <T.Th>가격</T.Th>
            <T.Th>시간</T.Th>
            <T.Th>인원</T.Th>
            <T.Th>매니저</T.Th>
            <T.Th>서비스 상태</T.Th>
            <T.Th>결제 상태</T.Th>
            <T.Th>Action</T.Th>
          </T.Tr>
        </T.Thead>
        <T.Tbody>{Content && Content.map((item, index) => <MainItem key={item.id} index={index} Data={item} page={page} />)}</T.Tbody>
      </T.Table>
    </T.TableContainer>
  );
}

export default MainTable;
