import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const StyleWrapper = styled.div<{ isOpen: boolean; size: string | undefined }>`
  position: relative;

  ${({ size }) =>
    size === 'small' &&
    css`
      div:first-of-type {
        button {
          width: 150px;
          height: 34px;
          padding: 0;
          padding-left: 12px;
          border: none;
          font-size: 14px;
          background-color: transparent;
        }

        svg {
          top: 5px;
          right: 8px;
        }
      }

      div:last-of-type {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        button {
          width: 150px;
        }
      }
    `}

  svg {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  border: 1px solid ${theme.colors.yolda_gray_4};
  border-top: none;

  button {
    color: ${theme.colors.yolda_gray_4} !important;
    background-color: #ffffff !important;
  }

  button:hover {
    color: #ffffff !important;
    background-color: ${theme.colors.yolda_gray_5} !important;
  }
`;
