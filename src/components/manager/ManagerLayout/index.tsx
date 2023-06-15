import React from 'react';

import * as G from '@/styles/common/table.style';
import * as S from './style';

function ManagerLayout() {
  return (
    <div>
      <S.Header className="header">
        <h1>매니저 관리</h1>
      </S.Header>

      <div className="content">
        <G.Table>
          <G.Thead>
            <tr>
              <G.Th scope="col">이름</G.Th>
              <G.Th scope="col">연락처</G.Th>
              <G.Th scope="col">거주지</G.Th>
              <G.Th scope="col">활동지역</G.Th>
              <G.Th scope="col">레벨</G.Th>
              <G.Th scope="col">자격증</G.Th>
              <G.Th scope="col">운전여부</G.Th>
              <G.Th scope="col">지원 폼</G.Th>
              <G.Th scope="col">예약 내역</G.Th>
              <G.Th scope="col">상태</G.Th>
              <G.Th scope="col">메모</G.Th>
            </tr>
          </G.Thead>
        </G.Table>
      </div>
    </div>
  );
}

export default ManagerLayout;
