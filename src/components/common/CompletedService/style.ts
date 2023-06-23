import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const CompletedFormContainer = styled.div`
  width: 440px;

  .swiper-wrapper {
    margin-left: 25px;
    padding-bottom: 15px;
  }

  .message {
    ${theme.font.regular_14}
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
  }
`;

export const StateTitle = styled.div`
  padding: 15px 20px 10px;
  ${theme.font.bold_16}
`;

export const Box = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: ${theme.colors.yolda_gray_7};
`;
