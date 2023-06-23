import React, { useState } from 'react';

import ModalContainer from '@/components/common/ModalContainer';
import TopBarGray from '@/components/common/TopBarGray';
import ReservationForm from '@/components/user/ReservationForm';
import CompletedService from '@/components/user/CompletedService';

import { StateButton } from '@/styles/common/StateButton';
import * as H from '@/components/user/History/style';

function ReservationHistory({ setIsOpen }: any) {
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [isServiceFormOpen, setIsServiceFormOpen] = useState(false);

  return (
    <ModalContainer setIsOpen={setIsOpen}>
      <>
        <TopBarGray title={`${'이름'}님의 예약내역`} setIsOpen={setIsOpen} />
        <H.Histories>
          <H.HistoryItem>
            <H.Date>
              <span>서비스 일시</span>
              <span>2023-12-29</span>
            </H.Date>
            <H.Buttons>
              <StateButton state={'blue'} onClick={() => setIsCustomerFormOpen(true)}>
                고객예약 폼
              </StateButton>
              <StateButton state={'blue'} onClick={() => setIsServiceFormOpen(true)}>
                매니저 서비스 완료 폼
              </StateButton>
            </H.Buttons>
          </H.HistoryItem>
        </H.Histories>

        {isCustomerFormOpen && <ReservationForm setIsOpen={setIsCustomerFormOpen} />}
        {isServiceFormOpen && <CompletedService setIsOpen={setIsServiceFormOpen} />}
      </>
    </ModalContainer>
  );
}

export default ReservationHistory;
