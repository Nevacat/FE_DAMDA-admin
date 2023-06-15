import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
  ${theme.font.regular_14}
  padding: 25px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: flex;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }

      &.active > a {
        ${theme.font.bold_14}
        color: #fff;
        background-color: ${theme.colors.main_blue};
      }
    }

    .prev {
      text-indent: -9999px;
      background-image: url('/icons/angle-left.svg');
      background-position: center;
      background-repeat: no-repeat;
    }

    .next {
      text-indent: -9999px;
      background-image: url('/icons/angle-right.svg');
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
