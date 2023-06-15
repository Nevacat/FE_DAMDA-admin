import { StateButton } from '@/styles/common/StateButton';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 440px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #eeeff2;

  img {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  ${theme.font.regular_14}
  font-weight: 500;
  line-height: 1;
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
