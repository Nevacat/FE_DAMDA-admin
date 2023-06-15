import React from 'react';
import ManagerTable from '../ManagerTable';
import * as S from './style';

function ManagerLayout() {
  return (
    <div>
      <S.Header className="header">
        <h1>매니저 관리</h1>
      </S.Header>

      <ManagerTable />
    </div>
  );
}

export default ManagerLayout;
