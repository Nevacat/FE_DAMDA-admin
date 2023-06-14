import styled from '@emotion/styled';
import theme from '../theme';

export const TableContainer = styled.div``;
export const Table = styled.table`
  width: 100%;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  border-bottom: 1px solid #718096;
`;
export const Th = styled.th`
  ${theme.font.bold_14}
  padding: 2px 4px;
  color: #718096;
  font-size: 14px;
  text-align: left;
  line-height: 80px;
  white-space: nowrap;
`;
export const Td = styled.td`
  padding: 2px 4px;
  max-width: 220px;
  height: 80px;
  vertical-align: middle;
  word-break: keep-all;
`;
