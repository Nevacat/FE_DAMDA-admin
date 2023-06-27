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
  justify-content: space-between;
`;

export const DateFilter = styled.div`
  width: 250px;
  height: 40px;
  background-color: white;
`;

export const ExcelDownload = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #858585;
  cursor: pointer;
  width: 140px;
  height: 40px;
  background-color: #fafafa;
  border: none;
`;
