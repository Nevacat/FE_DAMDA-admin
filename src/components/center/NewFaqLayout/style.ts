import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Title = styled.h1`
  margin-bottom: 78px;
  color: ${theme.colors.yolda_black_1};
  ${theme.font.bold_24_135}
`;

export const FormContainer = styled.div`
  padding-left: 77px;
`;

export const FormWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  &:last-of-type {
    display: flex;
  }

  input,
  button {
    width: 480px;
    height: 42px;
    padding: 10px 16px;
    border: 1px solid ${theme.colors.yolda_gray_5};
    border-radius: 5px;
    background-color: #ffffff;
    outline: none;
  }

  input::placeholder,
  button,
  textarea::placeholder {
    color: ${theme.colors.yolda_gray_5};
    font-size: 16px;
    font-weight: 600;
    line-height: 135%;
  }

  strong {
    margin-right: 56px;
    font-size: 16px;
    font-weight: 600;
  }

  button {
    text-align: left;
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 10px;
    right: 23px;
    font-size: 24px;
    color: ${theme.colors.yolda_gray_2};
    pointer-events: none;
  }

  textarea {
    width: 970px;
    height: 278px;
    padding: 10px 16px;
    border: 1px solid ${theme.colors.yolda_gray_5};
    border-radius: 5px;
    background-color: #ffffff;
    outline: none;
    resize: none;
  }
`;
