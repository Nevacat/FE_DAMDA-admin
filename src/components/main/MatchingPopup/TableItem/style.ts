import { css } from '@emotion/react';
import styled from '@emotion/styled';
import exp from 'constants';

export const ButtonCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  width: max-content;
  height: 32px;
  border-radius: 8px;
  user-select: none;
  margin: 0 auto;
`;

export const ResState = styled.div<{ state: string | boolean }>`
  ${ButtonCommon};
  ${({ state }) =>
    state === 'NO' || state === false || state === null
      ? css`
          color: #fd6a6a;
          background-color: #fff0f0;
        `
      : state === 'YES' || state === true
      ? css`
          color: #0caf60;
          background-color: #e7f7ef;
        `
      : css`
          color: #8c62ff;
          background-color: #f4f0ff;
        `}
`;

export const HistoryButton = styled.button`
  cursor: pointer;
  ${ButtonCommon};
  color: ${({ theme }) => theme.colors.main_blue};
  background-color: ${({ theme }) => theme.colors.sub_blue_4};
  border: none;
  ${({ theme }) => theme.font.regular_14};
`;
