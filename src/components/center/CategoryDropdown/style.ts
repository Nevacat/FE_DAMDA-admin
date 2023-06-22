import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const StyleWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;

  svg {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  width: 480px;

  button:hover {
    color: #ffffff;
    background-color: ${theme.colors.yolda_gray_5};
  }
`;
