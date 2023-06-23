import React, { ChangeEvent, useState } from 'react';

import LocationSelectionForm from '../../LocationSelectionForm';
import ReservationHistory from '../../ReservationHistory';

import { StateButton } from '@/styles/common/StateButton';
import * as G from '@/styles/common/table.style';
import * as S from './style';
import { useMutation } from '@tanstack/react-query';
import { putManagerInfo } from '@/api/manager';

interface ActiveManagerItemProps {
  activeManager: ManagerType;
}

function ActiveManagerItem({ activeManager }: ActiveManagerItemProps) {
  const {
    managerName,
    managerPhoneNumber,
    certificateStatus,
    certificateStatusEtc,
    level,
    vehicle,
    fieldExperience,
    mainJobStatus,
    mainJobStatusEtc,
    memo,
    currManagerStatus,
  } = activeManager;
  const formData = {
    managerName,
    managerPhoneNumber,
    certificateStatus,
    certificateStatusEtc,
    level,
    vehicle,
    fieldExperience,
    mainJobStatus,
    mainJobStatusEtc,
    memo,
    currManagerStatus,
  };

  const { mutate } = useMutation(putManagerInfo);

  // 오픈 여부
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // 변경 클릭
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingLevel, setIsEditingLevel] = useState(false);
  const [isEditingCertificate, setIsEditingCertificate] = useState(false);

  // --------- 활동 지역 외 ---------
  const nameBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    mutate({ id: activeManager.id, formData: { ...formData, managerName: e.target.value } });
    setIsEditingName(false);
  };

  const phoneBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    mutate({ id: activeManager.id, formData: { ...formData, managerPhoneNumber: e.target.value } });
    setIsEditingPhone(false);
  };

  const levelBlurHandler = () => {
    setIsEditingLevel(false);
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
        {isEditingName ? (
          <input autoFocus type="text" onBlur={nameBlurHandler} defaultValue={managerName} />
        ) : (
          managerName
        )}
      </S.ManagerTd>

      <S.ManagerTd onClick={() => setIsEditingPhone(true)} onBlur={() => setIsEditingPhone(false)}>
        {isEditingPhone ? (
          <input autoFocus type="text" onBlur={phoneBlurHandler} defaultValue={managerPhoneNumber} />
        ) : (
          managerPhoneNumber
        )}
      </S.ManagerTd>

      <S.ManagerTd style={{ position: 'relative' }} onClick={() => setIsLocationOpen(true)}>
        서울 금천구
        {isLocationOpen && <LocationSelectionForm />}
      </S.ManagerTd>

      <S.ManagerTd onClick={() => setIsEditingLevel(true)}>
        {isEditingLevel ? <input autoFocus type="text" onBlur={levelBlurHandler} value="5" /> : level}
      </S.ManagerTd>

      <S.ManagerTd onClick={() => setIsEditingCertificate(true)}>
        {isEditingCertificate ? (
          <input autoFocus type="text" onBlur={certificateBlurHandler} value="1급 (off)" />
        ) : (
          certificateStatus
        )}
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
        <StateButton state={'blue'} onClick={() => setIsHistoryOpen(true)}>
          예약 내역
          {isHistoryOpen && <ReservationHistory setIsOpen={setIsHistoryOpen} />}
        </StateButton>
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
