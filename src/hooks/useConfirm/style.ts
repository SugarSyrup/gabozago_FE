import styled from 'styled-components';

export const PopupWrapper = styled.div<{ isOpened: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpened }) => (isOpened ? 40 : -10)};

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const PopupContentsContainer = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const PopupTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:last-child {
    margin-top: 10px;
    text-align: center;
  }
`;

export const PopupButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const PopupButton = styled.button<{ isMain: boolean }>`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  border: none;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isMain, theme }) => (isMain ? '#F3F6FF' : theme.gray06)};
  color: ${({ isMain, theme }) => (isMain ? theme.main : theme.black)};
  cursor: pointer;
`;
