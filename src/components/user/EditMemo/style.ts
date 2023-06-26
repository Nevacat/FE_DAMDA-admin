import { StateButton } from '@/styles/common/StateButton';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 440px;
`;

export const Memo = styled.div`
  margin: 25px 25px 5px;
  padding: 5px;
  cursor: default;
  border-bottom: 1px solid ${theme.colors.yolda_gray_7};

  textarea {
    border: none;
    outline: none;
    width: 100%;
    height: 90px;
    line-height: 1.6;
    resize: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 25px;
  padding: 12px 38px;

  ${StateButton} {
    cursor: pointer;
  }
`;
