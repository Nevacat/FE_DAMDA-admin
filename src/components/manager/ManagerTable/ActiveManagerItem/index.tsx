import React, { useState } from 'react';

import LocationSelectionForm from '../../LocationSelectionForm';

import { StateButton } from '@/styles/common/StateButton';
import * as G from '@/styles/common/table.style';
import * as S from './style';

function ActiveManagerItem() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);

  const stateChangeHandler = () => {
    setIsStatusOpen(false);

    // 상태 변경 api 요청
  };

  return (
    <G.Tr>
      <S.ManagerTd>홍길동</S.ManagerTd>
      <S.ManagerTd>010-0000-0000</S.ManagerTd>
      <S.ManagerTd>서울 특별시 서초대로 23-1</S.ManagerTd>
      <S.ManagerTd style={{ position: 'relative' }} onClick={() => setIsLocationOpen(true)}>
        서울 금천구
        {isLocationOpen && <LocationSelectionForm />}
      </S.ManagerTd>
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
          활동 중
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
      <S.ManagerTd onMouseEnter={() => setIsMemoOpen(true)} onMouseLeave={() => setIsMemoOpen(false)}>
        <StateButton state={'blue'}>메모</StateButton>

        {isMemoOpen && <textarea name="" id=""></textarea>}
      </S.ManagerTd>
    </G.Tr>
  );
}

export default ActiveManagerItem;
