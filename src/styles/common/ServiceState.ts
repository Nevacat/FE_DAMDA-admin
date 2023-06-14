import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ServiceState } from '@/types/serviceState';
import theme from '../theme';

export const StateButton = styled.div<{ state: ServiceState }>`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: max-content;
  height: 32px;
  border-radius: 8px;

  ${({ state }) =>
    //주황색
    state === ServiceState.matching &&
    css`
      color: #fe964a;
      background-color: #fff0e6;
    `}

  ${({ state }) =>
    //보라색
    state === ServiceState.wating &&
    css`
      color: #8c62ff;
      background-color: #f4f0ff;
    `}

  ${({ state }) =>
    //파란색
    state === ServiceState.confirmation &&
    css`
      color: ${theme.colors.main_blue};
      background-color: ${theme.colors.sub_blue_4};
    `}

  ${({ state }) =>
    //초록색
    state === ServiceState.completed &&
    css`
      color: #0caf60;
      background-color: #e7f7ef;
    `}

  ${({ state }) =>
    //빨간색
    state === ServiceState.cancellation &&
    css`
      color: #fd6a6a;
      background-color: #fff0f0;
    `}
`;
