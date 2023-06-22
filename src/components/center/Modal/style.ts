import { ModalBackground, ModalContainer } from '@/components/common/ModalContainer/style';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Overlay = styled(ModalBackground)``;

export const Modal = styled(ModalContainer)`
  width: 440px;

  p {
    padding: 16px 30px;
    text-align: center;
    ${theme.font.bold_14}
    line-height: 160%;
  }

  button {
    height: 32px;
    padding: 0 16px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  button:first-of-type {
    color: ${theme.colors.yolda_gray_4};
  }

  button:last-of-type {
    color: #fd7a7a;
    background-color: #fff0f1;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  background-color: ${theme.colors.yolda_gray_7};

  button {
    background-color: transparent !important;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 30px;

  button:first-of-type {
    margin-right: 50px;
  }
`;
