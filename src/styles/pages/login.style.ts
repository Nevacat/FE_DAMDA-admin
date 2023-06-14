import styled from '@emotion/styled';
import theme from '../theme';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 147px;
    height: 69px;
    object-fit: cover;
  }

  p {
    ${theme.font.bold_18_135}
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.label`
  padding: 8px 15px 3px;
  width: 320px;
  line-height: 1.35;
  border: 1px solid #000;
  border-radius: 5px;

  &.alert {
    border: 1px solid ${theme.colors.red_1};
  }

  div {
    font-size: 14px;
    font-weight: 500;

    span {
      margin-left: 15px;
      color: ${theme.colors.red_1};
    }
  }

  input {
    outline: none;
    border: none;
    padding: 0;

    ${theme.font.bold_16}

    &::placeholder {
      color: ${theme.colors.yolda_gray_5};
    }
  }
`;

export const Button = styled.button`
  ${theme.font.bold_18_135}
  margin-top: 60px;
  padding: 0 20px;
  width: 320px;
  height: 55px;
  color: #fff;
  text-align: left;
  line-height: 0;
  background-color: ${theme.colors.main_blue};
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;
