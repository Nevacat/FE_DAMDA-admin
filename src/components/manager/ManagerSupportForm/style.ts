import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ManagerSupportForm = styled.aside`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 440px;
  color: #000000;
  background-color: #ffffff;
  z-index: 30;
  transform: translate(-50%, -50%);
  text-align: left;
  box-shadow: -3px 4px 15px #b5b5b5;

  > div {
    padding: 0 22px;
  }

  header {
    position: relative;

    h2 {
      padding: 13px 24px;
      font-size: 14px;
      font-weight: 500;
      line-height: 160%;
      background-color: ${theme.colors.yolda_gray_7};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 12px;
      right: 24px;
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const FormInfo = styled.article`
  padding: 20px 0 32px;

  h3 {
    margin-bottom: 16px;
    ${theme.font.bold_14}
    line-height: 160%;
  }

  div {
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin-bottom: 8px;
    border-bottom: 1px solid ${theme.colors.yolda_gray_7};
    font-size: 14px;
    font-weight: 300;
    line-height: 160%;

    dt {
      width: 137px;
    }

    dd {
      &.field-experience {
        font-size: 14px;
        font-weight: 300;
        line-height: 160%;
      }

      .day:not(:last-of-type) {
        margin-right: 4px;
      }

      .location:not(:last-of-type) {
        margin-right: 4px;
      }
    }
  }
`;
