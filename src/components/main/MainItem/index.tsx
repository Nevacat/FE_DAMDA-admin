import React from 'react';
import * as T from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/StateButton';
import { ReviewData } from '@/types/api/review';
import { Reservation } from '@/types/api/main';
import * as S from './style';
import { ServiceState } from '@/types/serviceState';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putStatusCancel, putStatusComplete } from '@/api/main';

interface MainItemProps {
  Data: Reservation;
}

enum PayState {
  NOT_PAID_FOR_ANYTHING = '',
  PAYMENT_COMPLETED = '입금',
}

const ActionType = {
  MANAGER_MATCHING_COMPLETED: '예약 취소',
  WAITING_FOR_MANAGER_REQUEST: '예약 취소',
  WAITING_FOR_ACCEPT_MATCHING: '예약 취소',
  SERVICE_COMPLETED: '결제완료',
  RESERVATION_CANCELLATION: '',
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function addCommasToPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function MainItem({ Data }: MainItemProps) {
  const state: any = ServiceState[Data.reservationStatus];
  const payState: any = PayState[Data.payMentStatus];
  const ActionState: any = ActionType[Data.reservationStatus];
  const formattedPrice = addCommasToPrice(Data.totalPrice); // price 값에 쉼표 추가

  const queryClient = useQueryClient();
  const { mutate: cancelMutation } = useMutation(putStatusCancel, {
    onSuccess: () => {
      // Trigger refetch after successful cancelMutation
      queryClient.refetchQueries(); // Replace 'reservationData' with the appropriate key for your query
    },
  });

  const { mutate: completeMutation } = useMutation(putStatusComplete, {
    onSuccess: () => {
      // Trigger refetch after successful completeMutation
      queryClient.refetchQueries(); // Replace 'reservationData' with the appropriate key for your query
    },
  });

  const onUpdateStatus = (Action: string, ListId: number) => {
    if (Action === '예약 취소') {
      cancelMutation(ListId);
    }
    if (Action === '결제완료') {
      completeMutation(ListId);
    }
  };

  const onPopup = (state: string, ListId: number) => {
    if (state === '매칭수락 대기') {
      // 팝업 처리 로직 추가
    }
  };

  return (
    <>
      <T.Tr>
        <T.Td style={{ padding: '5px' }}>{Data.id}</T.Td>
        <T.Td>{formatDate(Data.createdAt)}</T.Td>
        <T.Td>{Data.name}</T.Td>
        <T.Td>{Data.phoneNumber}</T.Td>
        <T.Td>{Data.address}</T.Td>
        <T.Td>{formatDate(Data.reservationDate)}</T.Td>
        <T.Td>{formattedPrice}</T.Td> {/* 쉼표가 추가된 price 값 */}
        <T.Td>{Data.estimate}</T.Td>
        <T.Td>{Data.manageAmount}명</T.Td>
        <T.Td>
          {Data.managerNames.map((managerName, index) => (
            <div key={index} style={{ marginBottom: '4px' }}>
              {managerName}
            </div>
          ))}
        </T.Td>
        <T.Td>
          <StateButton state={Data.reservationStatus} onClick={() => onPopup(state, Data.id)}>
            {state}
          </StateButton>
        </T.Td>
        <T.Td>
          <S.PayBox state={Data.payMentStatus}>{payState}</S.PayBox>
        </T.Td>
        <T.Td>
          <S.ActionBox
            reservationState={Data.reservationStatus}
            payState={Data.payMentStatus}
            onClick={() => onUpdateStatus(ActionState, Data.id)}
          >
            {Data.payMentStatus === 'NOT_PAID_FOR_ANYTHING' ? ActionState : ''}
          </S.ActionBox>
        </T.Td>
      </T.Tr>
    </>
  );
}

export default MainItem;
