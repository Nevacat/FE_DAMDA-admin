import React, { useState } from 'react';
import * as S from './style';
import { StateButton } from '@/styles/common/StateButton';
import ReservationForm from '../ReservationForm';

function History() {
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);
  return (
    <S.MoreHistory>
      <S.HistoryItem colSpan={4}>
        <div className="center">
          서비스 일시 :<span>2023-12-29</span>
        </div>
      </S.HistoryItem>
      <S.HistoryItem>
        <StateButton state={'blue'} onClick={() => setIsReservationFormOpen(!isReservationFormOpen)}>
          고객예약 폼
        </StateButton>
      </S.HistoryItem>
      <S.HistoryItem colSpan={3}>
        <StateButton state={'blue'}>매니저 서비스 완료 폼</StateButton>
      </S.HistoryItem>
      <td>{isReservationFormOpen && <ReservationForm setIsOpen={setIsReservationFormOpen} />}</td>
    </S.MoreHistory>
  );
}

export default History;
