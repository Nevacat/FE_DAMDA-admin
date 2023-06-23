import styled from '@emotion/styled';
import theme from '../theme';

export const SearchForm = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 440px;
  margin: 16px 0 20px;
  padding-left: 40px;
  background-color: #fafafa;
  border-radius: 4px;

  &::before {
    display: block;
    position: absolute;
    top: 50%;
    left: 10px;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    background-image: url('/icons/search.svg');
    content: '';
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 400px;
    height: 40px;
  }

  input::placeholder {
    color: ${theme.colors.yolda_gray_5};
  }
`;
