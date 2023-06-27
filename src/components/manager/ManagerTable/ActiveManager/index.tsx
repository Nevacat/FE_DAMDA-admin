import React from 'react';

import ActiveManagerItem from '../ActiveManagerItem';

import * as G from '@/styles/common/table.style';
import * as M from '../style';
import { ManagerType } from '@/types/manager';

interface ActiveManagerProps {
  activeManagers: ManagerType[];
}

function ActiveManager({ activeManagers }: ActiveManagerProps) {
  return (
    <M.ManagerTableContainer>
      <G.Table>
        <colgroup>
          <col width="5%" />
          <col width="11%" />
          <col width="14%" />
        </colgroup>

        <G.Thead>
          <tr>
            <M.ManagerTh scope="col">이름</M.ManagerTh>
            <M.ManagerTh scope="col">연락처</M.ManagerTh>
            <M.ManagerTh scope="col">활동지역</M.ManagerTh>
            <M.ManagerTh scope="col">레벨</M.ManagerTh>
            <M.ManagerTh scope="col">자격증</M.ManagerTh>
            <M.ManagerTh scope="col">운전여부</M.ManagerTh>
            <M.ManagerTh scope="col">지원 폼</M.ManagerTh>
            <M.ManagerTh scope="col">예약 내역</M.ManagerTh>
            <M.ManagerTh scope="col">상태</M.ManagerTh>
            <M.ManagerTh scope="col">메모</M.ManagerTh>
          </tr>
        </G.Thead>

        <tbody>
          {activeManagers?.map((activeManager: ManagerType) => (
            <ActiveManagerItem key={activeManager.id} activeManager={activeManager} />
          ))}
        </tbody>
      </G.Table>
    </M.ManagerTableContainer>
  );
}

export default ActiveManager;
