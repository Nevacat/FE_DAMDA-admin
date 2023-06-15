import styled from '@emotion/styled';
import theme from '../theme';

export const ReviewPageContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  img {
    margin: 0 40px;
    cursor: pointer;
  }
`;

export const PageTitle = styled.h2`
  ${theme.font.bold_24}
`;
