import { Td, Tr } from '@/styles/common/table.style';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const MoreHistory = styled(Tr)`
  position: relative;
  background-color: ${theme.colors.yolda_gray_7};
  border-bottom: none;

  &::after {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 165px;
    height: 2px;
    background-color: ${theme.colors.main_blue};
    content: '';
  }
`;

export const HistoryItem = styled(Td)`
  height: 56px;

  .center {
    text-align: center;
    span {
      ${theme.font.bold_14}
      margin-left: 10px;
    }
  }
`;
