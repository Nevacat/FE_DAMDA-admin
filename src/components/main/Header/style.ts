import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  ${({ theme }) => theme.font.bold_24_135};
`;

export const HeaderMenus = styled.div`
  width: 320px;
  display: flex;
  gap: 10px;
`;

export const DateFilter = styled.div`
  width: 250px;
  height: 40px;
  background-color: orange;
`;

export const ExcelDownload = styled.button`
  width: 140px;
  height: 40px;
  background-color: orange;
  border: none;
`;
