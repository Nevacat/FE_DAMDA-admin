import React, { useState } from 'react';
import * as T from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/StateButton';
import { ReviewData } from '@/types/api/review';
import { Reservation } from '@/types/api/main';
import * as S from './style';
import { ServiceState } from '@/types/serviceState';

interface MainItemProps {
  Data: Reservation;
}

enum PayState {
  NOT_PAID_FOR_ANYTHING = '',
  PAYMENT_COMPLETED = '입금',
}

type ServiceStateType = keyof typeof ServiceState;
type PayStateType = keyof typeof PayState;

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
  const state: ServiceStateType = Data.reservationStatus as ServiceStateType;
  const payState: PayStateType = Data.payMentStatus as PayStateType;

  const formattedPrice = addCommasToPrice(Data.totalPrice); // price 값에 쉼표 추가

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
          <StateButton state={Data.reservationStatus}>{state}</StateButton>
        </T.Td>
        <T.Td>
          <S.Paybox state={Data.payMentStatus}>{payState}</S.Paybox>
        </T.Td>
        <T.Td></T.Td>
      </T.Tr>
    </>
  );
}

export default MainItem;
