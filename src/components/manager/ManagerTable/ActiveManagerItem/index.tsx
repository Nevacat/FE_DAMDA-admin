import React, { useState } from 'react';

import LocationSelectionForm from '../../LocationSelectionForm';

import { StateButton } from '@/styles/common/StateButton';
import * as G from '@/styles/common/table.style';
import * as S from './style';

interface ActiveManagerItemProps {
  activeManager: ManagerType;
}

function ActiveManagerItem({ activeManager }: ActiveManagerItemProps) {
  // 오픈 여부
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);

  // 변경 클릭
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingLevel, setIsEditingLevel] = useState(false);
  const [isEditingCertificate, setIsEditingCertificate] = useState(false);

  // 활동 지역 외
  const nameBlurHandler = () => {
    setIsEditingName(false);
    // 변경 api 요청
  };

  const phoneBlurHandler = () => {
    setIsEditingPhone(false);
    // 변경 api 요청
  };

  const levelBlurHandler = () => {
    setIsEditingLevel(false);
    // 변경 api 요청
  };

  const certificateBlurHandler = () => {
    setIsEditingCertificate(false);
    // 변경 api 요청
  };

  const vehicleChangeHandler = () => {
    setIsVehicleOpen(false);
  };

  const stateChangeHandler = () => {
    setIsStatusOpen(false);

    // 상태 변경 api 요청
  };

  return (
    <G.Tr>
      <S.ManagerTd onClick={() => setIsEditingName(true)}>
        {isEditingName ? <input type="text" onBlur={nameBlurHandler} value="홍길동" /> : '홍길동'}
      </S.ManagerTd>
      <S.ManagerTd onClick={() => setIsEditingPhone(true)} onBlur={() => setIsEditingPhone(false)}>
        {isEditingPhone ? <input type="text" onBlur={phoneBlurHandler} value="010-0000-1111" /> : '010-0000-1111'}
      </S.ManagerTd>
      <S.ManagerTd>서울 특별시 서초대로 23-1</S.ManagerTd>
      <S.ManagerTd style={{ position: 'relative' }} onClick={() => setIsLocationOpen(true)}>
        서울 금천구
        {isLocationOpen && <LocationSelectionForm />}
      </S.ManagerTd>
      <S.ManagerTd onClick={() => setIsEditingLevel(true)}>
        {isEditingLevel ? <input type="text" onBlur={levelBlurHandler} value="5" /> : '5'}
      </S.ManagerTd>
      <S.ManagerTd onClick={() => setIsEditingCertificate(true)}>
        {isEditingCertificate ? <input type="text" onBlur={certificateBlurHandler} value="1급 (off)" /> : '1급 (off)'}
      </S.ManagerTd>
      <S.ManagerTd>
        <StateButton state={'green'} onClick={() => setIsVehicleOpen(!isVehicleOpen)}>
          가능
        </StateButton>

        {isVehicleOpen && (
          <S.StateChangeContainer>
            <StateButton state={'red'} onClick={vehicleChangeHandler}>
              불가능
            </StateButton>
          </S.StateChangeContainer>
        )}
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
