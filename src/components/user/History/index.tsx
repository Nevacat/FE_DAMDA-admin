import React, { useContext } from 'react';
import * as S from './style';
import { StateButton } from '@/styles/common/StateButton';
import { UserContext } from '@/pages/user';
import ModalContainer from '@/components/common/ModalContainer';
import TopBarGray from '@/components/common/TopBarGray';

interface HistoryProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function History({ setIsOpen }: HistoryProps) {
  const context = useContext(UserContext);
  if (!context) return;

  const { OpenReservationForm, OpenCompletedServiceForm } = context;

  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title={`${'이름'}님의 예약내역`} setIsOpen={setIsOpen} />
        <S.Histories>
          <S.HistoryItem>
            <S.Date>
              <span>서비스 일시</span>
              <span>2023-12-29</span>
            </S.Date>
            <S.Buttons>
              <StateButton state={'blue'} onClick={() => OpenReservationForm(1)}>
                고객예약 폼
              </StateButton>
              <StateButton state={'blue'} onClick={() => OpenCompletedServiceForm(1)}>
                매니저 서비스 완료 폼
              </StateButton>
            </S.Buttons>
          </S.HistoryItem>
        </S.Histories>
      </>
    </ModalContainer>
  );
}

export default History;
