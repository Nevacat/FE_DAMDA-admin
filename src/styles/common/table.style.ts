import styled from '@emotion/styled';
import theme from '../theme';

export const TableContainer = styled.div``;

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  border-bottom: 1px solid #eeeff2;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid #eeeff2;
`;

export const Th = styled.th`
  height: 72px;
  padding: 0 12px;
  color: ${theme.colors.yolda_gray_3};
  font-size: 14px;
  text-align: left;
  white-space: nowrap;
  vertical-align: middle;
`;

export const Td = styled.td`
  height: 80px;
  padding: 0 12px;
  word-break: keep-all;
  vertical-align: middle;
`;
