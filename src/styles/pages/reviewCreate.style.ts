import styled from '@emotion/styled';
import theme from '../theme';
import { StateButton } from '../common/StateButton';

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 1200px;
  gap: 24px;
  margin: 50px;

  ${StateButton} {
    margin: 0;
    font-weight: 500;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 17px;

  textarea {
    ${theme.font.regular_14}
    grid-column: 2/4;
    padding: 15px;
    min-height: 300px;
    font-family: 'Pretendard';
    outline: none;
    border: 1px solid ${theme.colors.yolda_gray_5};
    border-radius: 5px;
    resize: none;

    &::placeholder {
      font-family: 'Pretendard';
      ${theme.font.bold_16}
      color: ${theme.colors.yolda_gray_5};
      font-weight: 500;
    }
  }

  .cover {
    position: relative;

    &::after {
      display: block;
      position: absolute;
      right: 10px;
      top: calc(50% - 12px);
      width: 24px;
      height: 24px;
      background-image: url('/icons/search.svg');
      content: '';
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 15px;
  outline: none;
  border: 1px solid ${theme.colors.yolda_gray_5};
  border-radius: 5px;

  &::placeholder {
    ${theme.font.bold_14}
    color: ${theme.colors.yolda_gray_5};
    font-weight: 500;
  }
`;

export const Label = styled.label`
  ${theme.font.bold_16}
  line-height: 42px;
`;

export const Name = styled(Label.withComponent('p'))``;

export const UploaderContainer = styled.div`
  grid-column: 2/4;
`;

export const SelectImage = styled.div`
  input[type='file'] {
    display: none;
  }

  .swiper {
    padding-bottom: 15px;
  }

  .swiper-scrollbar-drag {
    background-color: ${theme.colors.yolda_gray_5};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;

export const Button = styled(StateButton.withComponent('button'))`
  border: none;
  outline: none;
  margin: 0;
  font-weight: 500;
  cursor: pointer;
`;
