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
