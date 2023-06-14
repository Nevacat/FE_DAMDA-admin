import styled from '@emotion/styled';
import theme from '../theme';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  h2 {
    ${theme.font.bold_16}
    text-align: center;
  }

  .login_button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.yolda_gray_3};
    line-height: 1.5;
    cursor: default;

    button {
      border: none;
      outline: none;
      width: 300px;
      height: 45px;
      background-image: url('/icons/kakao_login_medium_wide.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
