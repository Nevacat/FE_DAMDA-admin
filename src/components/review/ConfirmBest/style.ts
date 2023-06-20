import { StateButton } from '@/styles/common/StateButton';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 440px;
`;

export const Message = styled.p`
  ${theme.font.bold_14}
  text-align: center;
  line-height: 54px;
  cursor: default;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 12px;

  ${StateButton} {
    cursor: pointer;
  }
`;
