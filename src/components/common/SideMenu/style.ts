import theme from '@/styles/theme';
import styled from '@emotion/styled';
import Link from 'next/link';

export const SideBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  flex-shrink: 0;
  height: 100vh;
  width: 148px;
  background-color: #fff;
  border-right: 1px solid ${theme.colors.yolda_gray_5};
  z-index: 2;
`;

export const Logo = styled(Link)`
  display: block;
  padding: 25px 25px 30px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .category,
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 15px;
    user-select: none;
    border-radius: 5px;
  }

  a {
    cursor: pointer;
  }

  > a {
    &.active {
      color: #fff;
      background-color: ${theme.colors.main_blue};
    }
  }
`;

export const Folder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .category {
    cursor: default;

    &.active {
      color: #fff;
      background-color: ${theme.colors.main_blue};
    }

    svg {
      font-size: 1.6rem;
    }
  }

  .sub_menu {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;

    a {
      position: relative;
      width: 85%;

      &.active::before {
        display: block;
        position: absolute;
        top: 50%;
        left: 0px;
        width: 3px;
        height: 28px;
        margin-top: -14px;
        background-color: ${theme.colors.main_blue};
        content: '';
      }
    }
  }
`;
