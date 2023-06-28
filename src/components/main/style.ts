import styled from '@emotion/styled';

export const MainSection = styled.section`
  .react-datepicker__input-container {
    input {
      width: 170px;
      height: 40px;
      text-align: center;
      border: none;
      background-color: #fafafa;
      color: #858585;
      &:focus {
        outline: none;
      }
    }
  }
  .active {
    border: 2px solid ${({ theme }) => theme.colors.sub_blue_1};
  }
`;

export const TotalCardContainer = styled.div`
  width: 100%;
  padding: 70px 150px 62px 150px;
  display: flex;
  gap: 26px;
`;
