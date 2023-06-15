import React, { useState } from 'react';

import * as G from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/StateButton';
import * as S from './style';

function ManagerItem() {
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const stateChangeHandler = () => {
    setIsStatusOpen(false);

    // 상태 변경 api 요청
  };

  return (
    <G.Tr>
      <S.ManagerTd>홍길동님</S.ManagerTd>
      <S.ManagerTd>010-0000-0000</S.ManagerTd>
      <S.ManagerTd>서울 특별시 서초대로 23-1</S.ManagerTd>
      <S.ManagerTd>서울 특별시 서초대로 23-1</S.ManagerTd>
      <S.ManagerTd>5</S.ManagerTd>
      <S.ManagerTd>1급 (off)</S.ManagerTd>
      <S.ManagerTd>
        <StateButton state={'green'}>가능</StateButton>
      </S.ManagerTd>
      <S.ManagerTd>
        <StateButton state={'blue'}>지원폼</StateButton>
      </S.ManagerTd>
      <S.ManagerTd>
        <StateButton state={'blue'}>예약 내역</StateButton>
      </S.ManagerTd>
      <S.ManagerTd style={{ position: 'relative' }}>
        <StateButton state={'green'} onClick={() => setIsStatusOpen(!isStatusOpen)}>
          활동중
        </StateButton>

        {isStatusOpen && (
          <S.StateChangeContainer>
            <StateButton state={'purple'} onClick={stateChangeHandler}>
              대기
            </StateButton>
            <StateButton state={'orange'} onClick={stateChangeHandler}>
              보류
            </StateButton>
            <StateButton state={'red'} onClick={stateChangeHandler}>
              활동 불가
            </StateButton>
          </S.StateChangeContainer>
        )}
      </S.ManagerTd>
      <S.ManagerTd>
        <StateButton state={'blue'}>메모</StateButton>
      </S.ManagerTd>
    </G.Tr>
  );
}

export default ManagerItem;
