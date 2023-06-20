import { Td } from '@/styles/common/table.style';
import styled from '@emotion/styled';

export const ManagerTd = styled(Td)`
  position: relative;
  padding: 0 12px;

  textarea {
    position: absolute;
    top: 58px;
    right: 18px;
    z-index: 10;
  }
`;

export const StateChangeContainer = styled.div`
  position: absolute;
  top: 56px;
  left: 12px;

  div {
    width: 104px;
    cursor: pointer;
  }
`;
