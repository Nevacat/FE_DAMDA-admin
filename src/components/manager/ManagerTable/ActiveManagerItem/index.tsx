import React, { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { putManagerInfo } from '@/api/manager';

import LocationSelectionForm from '../../LocationSelectionForm';
import History from '@/components/common/History';

import { StateButton } from '@/styles/common/StateButton';
import * as G from '@/styles/common/table.style';
import * as S from './style';
import { ManagerType } from '@/types/manager';

interface ActiveManagerItemProps {
  activeManager: ManagerType;
}

function ActiveManagerItem({ activeManager }: ActiveManagerItemProps) {
  const {
    id,
    managerName,
    managerPhoneNumber,
    region,
    certificateStatus,
    certificateStatusEtc,
    level,
    vehicle,
    fieldExperience,
    mainJobStatus,
    mainJobStatusEtc,
    memo,
    prevManagerStatus,
    currManagerStatus,
  } = activeManager;
  const formData = {
    id,
    managerName,
    managerPhoneNumber,
    region,
    certificateStatus,
    certificateStatusEtc,
    level,
    vehicle,
    fieldExperience,
    mainJobStatus,
    mainJobStatusEtc,
    memo,
    prevManagerStatus,
    currManagerStatus,
  };

  const { mutate } = useMutation(putManagerInfo);

  // 오픈 여부
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isEtcOpen, setIsEtcOpen] = useState(false);

  // 변경 클릭
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingLevel, setIsEditingLevel] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [inputValue, setInputValue] = useState(certificateStatusEtc);

  // --------- 활동 지역 외 ---------
  const nameBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    mutate({ id, formData: { ...formData, managerName: e.target.value } });
    setIsEditingName(false);
  };

  const phoneBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    mutate({ id, formData: { ...formData, managerPhoneNumber: e.target.value } });
    setIsEditingPhone(false);
  };

  const vehicleChangeHandler = () => {
    setIsVehicleOpen(false);
    mutate({ id, formData: { ...formData, vehicle: vehicle ? false : true } });
  };

  const stateChangeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    let value = e.currentTarget.innerText;
    switch (value) {
      case '대기':
        value = 'WAITING';
        break;

      case '보류':
        value = 'PENDING';
        break;

      case '활동 불가':
        value = 'INACTIVE';
        break;

      default:
        break;
    }

    mutate({ id, formData: { ...formData, currManagerStatus: value } });
    setIsStatusOpen(false);
  };

  const selectLevelHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    mutate({ id, formData: { ...formData, level: e.currentTarget.innerText } });
    setIsEditingLevel(false);
  };

  const selectOptionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.innerText;
    let transformedValue;

    switch (value) {
      case '1급 (오프라인 취득)':
        transformedValue = 'FIRST_RATE_OFF';
        break;

      case '2급 (오프라인 취득)':
        transformedValue = 'SECOND_RATE_OFF';
        break;

      case '1급 (온라인 취득)':
        transformedValue = 'FIRST_RATE_ON';
        break;

      case '2급 (온라인 취득)':
        transformedValue = 'SECOND_RATE_ON';
        break;

      case '없음':
        transformedValue = 'NONE';
        break;

      default:
        break;
    }

    mutate({
      id,
      formData: { ...formData, certificateStatus: transformedValue, certificateStatusEtc: null },
    });
  };

  const etcSubmitHandler = () => {
    mutate({ id, formData: { ...formData, certificateStatus: 'ETC', certificateStatusEtc: inputValue } });
  };

  let transformedStatus;
  if (certificateStatus === 'ETC') {
    transformedStatus = certificateStatusEtc;
  } else {
    switch (certificateStatus) {
      case 'FIRST_RATE_OFF':
        transformedStatus = '1급 (off)';
        break;

      case 'SECOND_RATE_OFF':
        transformedStatus = '2급 (off)';
        break;

      case 'FIRST_RATE_ON':
        transformedStatus = '1급 (on)';
        break;

      case 'SECOND_RATE_ON':
        transformedStatus = '2급 (on)';
        break;

      case 'NONE':
        transformedStatus = '없음';
        break;

      default:
        break;
    }
  }

  const memoBlurHandler = (e: React.ChangeEvent<HTMLTextAreaElement> | any) => {
    const value = e.target.value;
    mutate({ id, formData: { ...formData, memo: value } });
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
        {region.서울특별시.map((seoul, index) => (
          <span key={index}>서울 {seoul}</span>
        ))}
        {region.경기도.map((gyeonggi, index) => (
          <span key={index}>경기 {gyeonggi}</span>
        ))}
        {isLocationOpen && <LocationSelectionForm region={region} id={id} formData={formData} />}
      </S.ManagerTd>

      <S.ManagerTd onClick={() => setIsEditingLevel(!isEditingLevel)}>
        {level}
        {isEditingLevel && (
          <S.CertificateForm size="small">
            <div style={{ position: 'relative' }}>
              <ul>
                <li>
                  <S.OptionButton type="button" onClick={selectLevelHandler}>
                    1
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectLevelHandler}>
                    2
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectLevelHandler}>
                    3
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectLevelHandler}>
                    4
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectLevelHandler}>
                    5
                  </S.OptionButton>
                </li>
              </ul>
            </div>
          </S.CertificateForm>
        )}
      </S.ManagerTd>

      <S.ManagerTd style={{ position: 'relative' }} onClick={() => setIsCertificateOpen(!isCertificateOpen)}>
        {transformedStatus}

        {isCertificateOpen && (
          <S.CertificateForm>
            <div style={{ position: 'relative' }}>
              <ul>
                <li>
                  <S.OptionButton type="button" onClick={selectOptionHandler}>
                    1급 (오프라인 취득)
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectOptionHandler}>
                    2급 (오프라인 취득)
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectOptionHandler}>
                    1급 (온라인 취득)
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectOptionHandler}>
                    2급 (온라인 취득)
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton type="button" onClick={selectOptionHandler}>
                    없음
                  </S.OptionButton>
                </li>

                <li>
                  <S.OptionButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEtcOpen(!isEtcOpen);
                    }}
                  >
                    기타
                  </S.OptionButton>
                </li>
              </ul>

              {isEtcOpen && (
                <S.InputWrapper>
                  <input
                    type="text"
                    defaultValue={certificateStatusEtc}
                    autoFocus
                    placeholder="자격증 이름"
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCertificateOpen(true);
                    }}
                  />

                  <button type="button" onClick={etcSubmitHandler}>
                    제출
                  </button>
                </S.InputWrapper>
              )}
            </div>
          </S.CertificateForm>
        )}
      </S.ManagerTd>

      <S.ManagerTd>
        <StateButton state={vehicle ? 'green' : 'red'} onClick={() => setIsVehicleOpen(!isVehicleOpen)}>
          {vehicle ? '가능' : '불가능'}
        </StateButton>

        {isVehicleOpen && (
          <S.StateChangeContainer>
            <StateButton state={vehicle ? 'red' : 'green'} onClick={vehicleChangeHandler}>
              {vehicle ? '불가능' : '가능'}
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
          {isHistoryOpen && <History type="MANAGER" userId={id} username={managerName} setIsOpen={setIsHistoryOpen} />}
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

        {isMemoOpen && (
          <textarea
            name=""
            id=""
            onBlur={memoBlurHandler}
            onMouseLeave={memoBlurHandler}
            defaultValue={memo}
          ></textarea>
        )}
      </S.ManagerTd>
    </G.Tr>
  );
}

export default ActiveManagerItem;
