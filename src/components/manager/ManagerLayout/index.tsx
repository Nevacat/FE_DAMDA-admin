import React, { useState } from 'react';

import ManagerTable from '../ManagerTable';
import ActiveManager from '../ManagerTable/ActiveManager';

import * as S from './style';

function ManagerLayout() {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <S.Header className="header">
        <h1>매니저 관리</h1>
      </S.Header>

      {/* 활동 중 매니저 데이터 */}
      <ActiveManager />

      <S.ButtonGroup>
        <button type="button" onClick={() => setCategory('all')}>
          전체
        </button>
        <button type="button" onClick={() => setCategory('waiting')}>
          매니저 신청 관리
        </button>
        <button type="button" onClick={() => setCategory('pending')}>
          보류 매니저
        </button>
        <button type="button" onClick={() => setCategory('inactive')}>
          활동 불가 매니저
        </button>
      </S.ButtonGroup>

      {/* 필터링 버튼에 따라 다른 데이터 전달 */}
      <ManagerTable
        waiting={[
          { name: 'W1', managerStatus: '대기' },
          { name: 'W2', managerStatus: '대기' },
          { name: 'W2', managerStatus: '대기' },
        ]}
        pending={[
          { name: 'P1', managerStatus: '보류' },
          { name: 'P2', managerStatus: '보류' },
        ]}
        inactive={[
          { name: 'I1', managerStatus: '활동 불가' },
          { name: 'I2', managerStatus: '활동 불가' },
        ]}
        category={category}
      />
    </div>
  );
}

export default ManagerLayout;
