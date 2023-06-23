import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const FormLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .Toastify {
    position: absolute;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  h1 {
    font-weight: 800;
    font-size: 18px;
    line-height: 135%;
  }
  h2 {
    width: 25%;
    background: #fafafa;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.yolda_gray_4};

    padding: 1rem;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

export const FormListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Divider = styled.div``;

export const FormTittleWrapper = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-weight: 900;
    font-size: 20px;
    line-height: 135%;
    word-break: keep-all;
  }
  input {
    font-weight: 900;
    font-size: 20px;
    line-height: 135%;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export const FormAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  .header {
    width: 300px;
    display: flex;
    gap: 12px;
    align-items: center;
  }

  h1 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  input {
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    line-height: 135%;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .address-list {
    display: flex;
    gap: 24px;
  }

  .address-item {
    width: 300px;
    height: 310px;
  }

  .address-wrapper {
    width: 100%;
    height: 55px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-radius: 5px;
  }

  .address-list-item {
    margin-top: -8px;
    width: 100%;
    height: 260px;
    overflow-y: auto;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
    span {
      border: 2px solid transparent;
      border-radius: 5px;
      width: 100%;
      padding: 12px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-top: 0;
    border-radius: 0 0 5px 5px;
  }

  .input {
    width: 300px;
    height: 55px;
    padding: 10px 16px;

    display: flex;
    flex-direction: column;
    gap: 2px;
    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-radius: 5px;

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
    input {
      width: 100%;
      font-weight: 800;
      font-size: 16px;
      line-height: 135%;
      border: none;
      color: ${({ theme }) => theme.colors.yolda_gray_4};

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.yolda_gray_3};
      }
    }
  }
`;

export const FormSelectWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  .header {
    display: flex;
    gap: 8px;
  }

  h1 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.yolda_black_1};
  }

  input {
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    line-height: 135%;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .select-wrapper {
    width: 300px;
    height: 55px;
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    font-size: 16px;
    line-height: 19px;

    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-radius: 5px;
  }

  .item-list {
    margin-top: -20px;
    width: 300px;
    min-height: 200px;
    overflow-y: auto;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow-x: hidden;
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border: 2px solid transparent;
      border-radius: 5px;
      width: 100%;

      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-top: 0;
    border-radius: 0 0 5px 5px;
  }

  .plus-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .add {
    padding: 12px;
    width: 100%;
  }

  .button {
    position: absolute;
    top: 50px;
    right: -60px;
  }
`;

export const FormRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  h1 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  .header {
    width: 300px;
    display: flex;
    gap: 12px;
    align-items: center;
  }

  h1 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  input {
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    line-height: 135%;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .radio-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 12px;

    .item-container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 12px;

      input {
        width: 100%;
        height: 50px;
        padding: 10px;
        border: 1px solid #0061ff;
        border-radius: 5px;
        color: #0061ff;

        &::placeholder {
          color: #0061ff;
        }

        &:focus {
          outline: none;
        }
      }
    }

    .button-wrapper {
      display: flex;
      gap: 12px;
      align-items: end;
    }

    .radio-item {
      width: 100px;
      height: 50px;
      padding: 10px;
      position: relative;

      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
      color: ${({ theme }) => theme.colors.yolda_gray_4};
      border-radius: 5px;

      .delete {
        position: absolute;
        top: -10px;
        right: -10px;
      }
    }
  }
`;

export const FormDateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 390px;
  position: relative;

  .header {
    display: flex;
    gap: 8px;
  }
  input {
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    line-height: 135%;
    border: none;

    &:focus {
      outline: none;
    }
  }
  h1 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
    flex-wrap: wrap;
  }
  .select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .input-wrapper {
      display: flex;
      align-items: center;
      width: 300px;
      height: 55px;

      gap: 8px;
      justify-content: space-between;
      padding: 10px;

      font-size: 16px;
      line-height: 19px;

      border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
      border-radius: 5px;
    }
  }

  .radio-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .radio-item-wrapper {
      display: flex;
      gap: 12px;

      span {
        padding: 10px;
        width: 100px;
        height: 50px;

        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.yolda_gray_4};

        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid ${({ theme }) => theme.colors.yolda_gray_4};
        border-radius: 5px;
      }
    }
  }
`;

export const FormInputWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  .header {
    display: flex;
    gap: 8px;
  }

  input {
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    line-height: 135%;
    border: none;

    &:focus {
      outline: none;
    }
  }

  h1 {
    font-weight: 800;
    font-size: 16px;
    line-height: 160%;
  }

  .input-wrapper {
    width: 100%;
    height: 55px;
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;

    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-radius: 5px;

    input {
      border: 0;
      font-weight: 800;
      font-size: 16px;
      line-height: 135%;

      color: ${({ theme }) => theme.colors.yolda_gray_4};
      &::placeholder {
        color: ${({ theme }) => theme.colors.yolda_gray_4};
      }

      &:focus {
        outline: none;
      }

      &:disabled {
        background-color: #fff;
      }
    }

    div {
      display: flex;
    }
  }

  .button {
    position: absolute;
    right: -50px;
    top: 50px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 14px 16px;
    border: 1px solid ${({ theme }) => theme.colors.yolda_gray_1};
    border-radius: 5px;
    resize: none;

    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: inherit;
    }
  }
  .footer {
    display: flex;
    justify-content: end;
    gap: 12px;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.yolda_gray_2};
  }
  .textarea {
    height: 100px;
    display: flex;
    gap: 12px;
  }
`;

export const FormChangeBtn = styled.div`
  position: relative;
`;

export const FormChangeModal = styled(motion.div)`
  width: 200px;
  position: absolute;
  box-shadow: -3px 4px 15px rgba(181, 181, 181, 0.25), 0px 4px 4px rgba(204, 194, 233, 0.25);
  backdrop-filter: blur(4px);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    width: 100%;
    background-color: #eeeff2;
    h2 {
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .item {
      height: 45px;
      display: flex;
      align-items: end;
      padding: 20px 24px 0 24px;
      width: 100%;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      transform-origin: left;

      &:last-child {
        margin-bottom: 32px;
      }
    }
  }
`;

export const EditButtonWrapper = styled(motion.div)`
  height: fit-content;
`;

export const DragHandle = styled.div`
  position: absolute;
  left: -22px;
  top: 0;
`;
