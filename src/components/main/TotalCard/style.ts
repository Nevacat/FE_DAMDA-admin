import styled from '@emotion/styled';

export const TotalCardWrap = styled.div`
  cursor: pointer;
  width: 170px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.sub_blue_3};
  padding: 20px 0 0 20px;
`;

export const TotalCardTitle = styled.div`
  ${({ theme }) => theme.font.regular_14};
  margin-bottom: 8px;
`;

export const Total = styled.div`
  ${({ theme }) => theme.font.bold_30};
`;
