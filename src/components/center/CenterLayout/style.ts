import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Link from 'next/link';

export const Title = styled.h1`
  margin-bottom: 65px;
  color: ${theme.colors.yolda_black_1};
  ${theme.font.bold_24_135}
`;

export const AddButton = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;
