import styled from '@emotion/styled';
import { IoClose } from 'react-icons/io5';

export const MatchingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MatchingPopupWrapper = styled.div`
  width: 1100px;
  height: 640px;
  background-color: #ffffff;
  border-radius: 4px;
  border-top: 3px solid #8c62ff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 12px 24px;
  position: relative;
`;

export const MatchingPopupHeader = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MatchingPopupTitle = styled.div`
  ${({ theme }) => theme.font.bold_16};
`;

export const CloseButton = styled(IoClose)`
  cursor: pointer;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.main_blue};
`;

export const MatchingPopupContent = styled.div`
  height: 480px;
  overflow-y: auto;
`;

export const ReqButton = styled.button<{ enabled: boolean }>`
  position: absolute;
  bottom: 36px;
  padding: 5px 15px;
  width: max-content;
  height: 32px;
  border-radius: 8px;
  user-select: none;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.font.regular_14};
  background-color: ${({ enabled, theme }) => (enabled ? theme.colors.sub_blue_4 : '#EEEFF2')};
  color: ${({ enabled, theme }) => (enabled ? theme.colors.main_blue : '#b4b4b5')};
`;
