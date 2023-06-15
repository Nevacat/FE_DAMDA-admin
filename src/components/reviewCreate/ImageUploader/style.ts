import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const UploaderContainer = styled.div`
  grid-column: 2/4;
`;

export const Name = styled.p`
  ${theme.font.bold_16}
  line-height: 42px;
`;

export const Label = styled.label`
  ${theme.font.bold_16}
  line-height: 42px;
`;

export const SelectImage = styled.div`
  > label {
    ${theme.font.bold_14}
    display: block;
    width: 160px;
    color: ${theme.colors.main_blue};
    text-align: center;
    line-height: 34px;
    background-color: ${theme.colors.sub_blue_4};
    border-radius: 8px;
  }

  input[type='file'] {
    display: none;
  }

  .swiper {
    padding-bottom: 20px;
  }

  .swiper-scrollbar-drag {
    background-color: ${theme.colors.yolda_gray_5};
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border: 1px solid ${theme.colors.yolda_gray_5};
  border-radius: 5px;
  flex-shrink: 0;

  &:hover {
    .delete {
      display: block;
    }
  }

  .delete {
    display: none;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;

export const EmptyBox = styled(ImageBox.withComponent('label'))`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/icons/image.png');
  background-position: center;
  background-repeat: no-repeat;
`;
