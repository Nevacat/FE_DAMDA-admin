import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Low = styled.div`
  /* position: relative; */
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paybox = styled.div<{ state: string }>`
  ${({ state }) =>
    //초록색
    state === 'SERVICE_COMPLETED'
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
