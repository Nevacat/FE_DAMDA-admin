import { StateButton } from '@/styles/common/StateButton';
import { TableContainer } from '@/styles/common/table.style';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 830px;
  padding: 12px 24px;
  border-top: 3px solid #9948ff;

  h3 {
    ${theme.font.bold_16}
  }

  img {
    cursor: pointer;
  }
`;

export const List = styled.div`
  margin: 0 24px 12px;
  border-top: 1px solid ${theme.colors.yolda_gray_5};
`;

export const TableCover = styled(TableContainer)`
  width: calc(830px - (24px * 2));
  line-height: 1.35;

  tbody {
    tr {
      transition: background-color 0.2s;
      &:hover {
        background-color: ${theme.colors.sub_blue_4};
      }
    }
  }

  .manager_name {
    display: block;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  ${StateButton} {
    width: 160px;
    cursor: pointer;
  }
`;
