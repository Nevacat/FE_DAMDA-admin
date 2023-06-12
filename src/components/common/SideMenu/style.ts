import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const SideBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  padding: 20px 10px;
  border-right: 1px solid;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .category,
  a {
    padding: 10px;
    background-color: ${theme.colors.yolda_gray_4};
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 1.6rem;
    }
  }

  .sub_menu {
    display: flex;
    flex-direction: column;
    gap: 5px;

    a {
      background-color: ${theme.colors.yolda_gray_5};
    }
  }
`;
