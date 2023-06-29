import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const ReservationForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  padding: 20px;
  width: 780px;
  color: ${theme.colors.yolda_black_1};

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
`;

export const UserInfo = styled.div`
  grid-area: 1/1/2/3;
`;

export const ServiceInfo = styled.div`
  grid-area: 2/1/3/2;
`;

export const ReservationInfo = styled.div`
  grid-area: 3/1/4/2;
`;

export const DetailInfo = styled.div`
  grid-area: 2/2/4/3;
`;

export const MoreInfo = styled.div`
  grid-area: 4/2/5/3;
`;

export const InfoTitle = styled.div`
  ${theme.font.bold_14}
  line-height: 2;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 5px;
  padding: 7px 5px;
  line-height: 1.35;
  border-bottom: 1px solid ${theme.colors.yolda_gray_7};

  div {
    word-break: keep-all;
  }
`;
