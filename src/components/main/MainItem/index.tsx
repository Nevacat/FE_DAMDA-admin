import React from 'react';
import * as T from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/StateButton';
import { ReviewData } from '@/types/api/review';
import { Reservation } from '@/types/api/main';
import * as S from './style';
import { ServiceState } from '@/types/serviceState';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putStatusCancel, putStatusComplete } from '@/api/main';
import MatchingPopup from '../MatchingPopup';
import { toast } from 'react-toastify';

interface MainItemProps {
  Data: Reservation;
  index: number;
  page: number;
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

function MainItem({ Data, index, page }: MainItemProps) {
  const state: any = ServiceState[Data.reservationStatus];
  const payState: any = PayState[Data.payMentStatus];
  const ActionState: any = ActionType[Data.reservationStatus];
  const formattedPrice = addCommasToPrice(Data.totalPrice); // price 값에 쉼표 추가

  const queryClient = useQueryClient();
  const { mutate: cancelMutation } = useMutation(putStatusCancel, {
    onSuccess: () => {
      // Trigger refetch after successful cancelMutation
      queryClient.refetchQueries(); // Replace 'reservationData' with the appropriate key for your query
      toast.success('예약이 취소되었습니다.');
    },
    onError: () => {
      toast.error('예약 취소에 실패했습니다.');
    },
  });

  const { mutate: completeMutation } = useMutation(putStatusComplete, {
    onSuccess: () => {
      queryClient.refetchQueries();
      toast.success('결제가 완료되었습니다.');
    },
    onError: () => {
      toast.error('결제에 실패했습니다.');
    },
  });

  const onUpdateStatus = (Action: string, ListId: number) => {
    const confirmMessage =
      Action === '예약 취소' ? '예약을 취소하시겠습니까?' : Action === '결제완료' ? '결제를 완료하시겠습니까?' : '';

    if (confirmMessage && window.confirm(confirmMessage)) {
      if (Action === '예약 취소') {
        cancelMutation(ListId);
      }
    } else if (Action === '결제완료') {
      completeMutation(ListId);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const togglePopup = () => {
    if (Data.reservationStatus === 'WAITING_FOR_ACCEPT_MATCHING') {
      setIsPopupOpen(!isPopupOpen);
    }
    return;
  };
  return (
    <>
      <T.Tr>
        <T.Td style={{ padding: '5px' }}>{(page - 1) * 10 + index + 1}</T.Td>
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
          <StateButton state={Data.reservationStatus} onClick={togglePopup}>
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
      {isPopupOpen && <MatchingPopup reservationId={Data.id} togglePopup={togglePopup} />}
    </>
  );
}

export default MainItem;
