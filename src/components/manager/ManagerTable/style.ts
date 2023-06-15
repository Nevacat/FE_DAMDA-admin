import { Th } from '@/styles/common/table.style';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ManagerTableContainer = styled.div`
  margin-bottom: 40px;
`;

export const ManagerTh = styled(Th)`
  padding: 0 12px;
`;

export const Title = styled.td`
  height: 46px;
  ${theme.font.regular_14}
  font-weight: 500;
  background-color: #eeeff2;
  text-align: center;
  vertical-align: middle;
`;
