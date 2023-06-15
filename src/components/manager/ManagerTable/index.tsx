import React from 'react';

import ManagerItem from './ManagerItem';

import * as G from '@/styles/common/table.style';
import * as S from './style';

function ManagerTable() {
  return (
    <G.TableContainer className="content">
      <G.Table>
        <G.Thead>
          <tr>
            <S.ManagerTh scope="col">이름</S.ManagerTh>
            <S.ManagerTh scope="col">연락처</S.ManagerTh>
            <S.ManagerTh scope="col">거주지</S.ManagerTh>
            <S.ManagerTh scope="col">활동지역</S.ManagerTh>
            <S.ManagerTh scope="col">레벨</S.ManagerTh>
            <S.ManagerTh scope="col">자격증</S.ManagerTh>
            <S.ManagerTh scope="col">운전여부</S.ManagerTh>
            <S.ManagerTh scope="col">지원 폼</S.ManagerTh>
            <S.ManagerTh scope="col">예약 내역</S.ManagerTh>
            <S.ManagerTh scope="col">상태</S.ManagerTh>
            <S.ManagerTh scope="col">메모</S.ManagerTh>
          </tr>
        </G.Thead>

        <tbody>
          <ManagerItem />
        </tbody>
      </G.Table>
    </G.TableContainer>
  );
}

export default ManagerTable;
