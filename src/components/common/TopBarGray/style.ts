import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: #000;
  background-color: ${theme.colors.yolda_gray_7};

  img {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  ${theme.font.regular_14}
  font-weight: 500;
  line-height: 1;
`;
