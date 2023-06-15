import { Td } from '@/styles/common/table.style';
import styled from '@emotion/styled';

export const ManagerTd = styled(Td)`
  padding: 0 12px;
`;

export const StateChangeContainer = styled.div`
  position: absolute;
  top: 56px;
  left: 12px;
  z-index: 10;

  div {
    width: 104px;
    cursor: pointer;
  }
`;
