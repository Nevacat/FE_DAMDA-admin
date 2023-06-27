import styled from '@emotion/styled';
import theme from '../theme';

export const PageTitle = styled.h2`
  ${theme.font.bold_18_135}
  cursor: default;
`;

export const PageHeader = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 40px;

  a {
    display: block;
    margin: 0 40px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
