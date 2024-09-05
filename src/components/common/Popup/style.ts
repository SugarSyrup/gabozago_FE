import styled from 'styled-components';

export const PopupWrapper = styled.div<{ isOpend: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpend }) => (isOpend ? 300 : -10)};

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupBG = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100dvh;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    opacity: 30%;
    background-color: ${({ theme }) => theme.black};
  }
`;

export const Popup = styled.div`
  width: 90%;
  position: absolute;
  z-index: 300;
  padding: 24px;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PopupNoPadding = styled(Popup)`
  padding: 0px;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const TextContainer = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  h1 {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  padding-top: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
`;
