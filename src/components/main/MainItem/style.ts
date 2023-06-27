import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Low = styled.div`
  /* position: relative; */
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PayBox = styled.div<{ state: string }>`
  ${({ state }) =>
    //초록색
    state === 'PAYMENT_COMPLETED'
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 15px;
          width: max-content;
          height: 32px;
          border-radius: 8px;
          user-select: none;
          margin: 0 auto;
          color: #0caf60;
          background-color: #e7f7ef;
        `
      : css`
          width: 14px;
          height: 3px;
          background-color: gray;
          margin: 0 auto;
        `}
`;

export const ActionBox = styled.button<{ reservationState: string, payState:string }>`
  border: none;
  ${({ reservationState,payState }) =>
    //빨간색
    reservationState === 'MANAGER_MATCHING_COMPLETED' ||
    reservationState === 'WAITING_FOR_MANAGER_REQUEST' ||
    reservationState === 'WAITING_FOR_ACCEPT_MATCHING'
      ? css`
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 15px;
          width: max-content;
          height: 32px;
          border-radius: 8px;
          user-select: none;
          margin: 0 auto;
          color: #fd6a6a;
          background-color: #fff0f0;
        `
      : reservationState === 'SERVICE_COMPLETED' && payState === 'NOT_PAID_FOR_ANYTHING'
      ? css`
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 15px;
          width: max-content;
          height: 32px;
          border-radius: 8px;
          user-select: none;
          margin: 0 auto;
          color: #0caf60;
          background-color: #e7f7ef;
        `
      :css`
          display: flex;
          align-items: center;
          width: 14px;
          height: 3px;
          background-color: gray;
          margin: 0 auto;
        `}
`;
