import { StateButton } from '@/styles/common/StateButton';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Histories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  padding: 20px 20px 0;

  .message {
    text-align: center;
  }
`;

export const HistoryItem = styled.div``;

export const Date = styled.div`
  display: flex;
  gap: 25px;
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.yolda_gray_7};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 25px;
  padding: 10px;

  ${StateButton} {
    cursor: pointer;
  }
`;
