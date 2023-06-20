import React, { useState } from 'react';

import * as G from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/StateButton';
import * as S from './style';

function ManagerItem({ data }: any) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);

  let statusText;
  let stateChangeButtons;

  const stateChangeHandler = () => {
    setIsStatusOpen(false);

    // 상태 변경 api 요청
  };

  switch (data.managerStatus) {
    case '대기':
      statusText = '대기';
      stateChangeButtons = (
        <S.StateChangeContainer>
          <StateButton state={'green'} onClick={stateChangeHandler}>
            활동 중
          </StateButton>
          <StateButton state={'orange'} onClick={stateChangeHandler}>
            보류
          </StateButton>
          <StateButton state={'red'} onClick={stateChangeHandler}>
            활동 불가
          </StateButton>
        </S.StateChangeContainer>
      );
      break;

    case '보류':
      statusText = '보류';
      stateChangeButtons = (
        <S.StateChangeContainer>
          <StateButton state={'green'} onClick={stateChangeHandler}>
            활동 중
          </StateButton>
          <StateButton state={'purple'} onClick={stateChangeHandler}>
            대기
          </StateButton>
          <StateButton state={'red'} onClick={stateChangeHandler}>
            활동 불가
          </StateButton>
        </S.StateChangeContainer>
      );
      break;

    case '활동 불가':
      statusText = '활동 불가';
      stateChangeButtons = (
        <S.StateChangeContainer>
          <StateButton state={'green'} onClick={stateChangeHandler}>
            활동 중
          </StateButton>
          <StateButton state={'orange'} onClick={stateChangeHandler}>
            보류
          </StateButton>
          <StateButton state={'purple'} onClick={stateChangeHandler}>
            대기
          </StateButton>
        </S.StateChangeContainer>
      );
      break;

    default:
  }

  return (
    <G.Tr>
      <S.ManagerTd>{data.name}</S.ManagerTd>
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
        <StateButton
          state={data.managerStatus === '대기' ? 'purple' : data.managerStatus === '보류' ? 'orange' : 'red'}
          onClick={() => setIsStatusOpen(!isStatusOpen)}
        >
          {statusText}
        </StateButton>

        {isStatusOpen && stateChangeButtons}
      </S.ManagerTd>
      <S.ManagerTd onMouseEnter={() => setIsMemoOpen(true)} onMouseLeave={() => setIsMemoOpen(false)}>
        <StateButton state={'blue'}>메모</StateButton>

        {isMemoOpen && <textarea name="" id=""></textarea>}
      </S.ManagerTd>
    </G.Tr>
  );
}

export default ManagerItem;
