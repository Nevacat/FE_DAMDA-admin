import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Header = styled.header`
  h1 {
    margin-bottom: 104px;
    color: #000000;
    ${theme.font.bold_18_135}
  }
`;

export const ButtonGroup = styled.div`
  button {
    width: 170px;
    height: 46px;
    border: none;
    border-radius: 4px;
    ${theme.font.regular_14}
    font-weight: 500;
    background-color: '#f7f7f7';
    outline: none;
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 4px;
    }
  }
`;
