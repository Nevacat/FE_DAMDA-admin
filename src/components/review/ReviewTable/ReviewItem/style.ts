import styled from '@emotion/styled';
import { Td, Tr } from '@/styles/common/table.style';

export const Row = styled(Tr)`
  position: relative;
`;

export const ReviewContent = styled(Td)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 20px;
`;
