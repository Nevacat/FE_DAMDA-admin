import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ImageBox = styled.div`
  overflow: hidden;
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

  .image {
    object-fit: cover;
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

export const Label = styled.label`
  ${theme.font.bold_14}
  line-height: 42px;
  display: block;
  width: 160px;
  color: ${theme.colors.main_blue};
  text-align: center;
  line-height: 34px;
  background-color: ${theme.colors.sub_blue_4};
  border-radius: 8px;
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 3px 0 16px;

  .message {
    color: ${theme.colors.yolda_gray_3};
  }
`;
