import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const SideBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  flex-shrink: 0;
  height: 100vh;
  width: 160px;
  background-color: #fff;
  border-right: 1px solid ${theme.colors.yolda_gray_5};
  z-index: 1;
`;

export const Logo = styled.div`
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
    padding: 8px 20px;
    user-select: none;
  }

  a {
    cursor: pointer;
  }
`;

export const Folder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .category {
    cursor: default;

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
      width: 85%;
    }
  }
`;
