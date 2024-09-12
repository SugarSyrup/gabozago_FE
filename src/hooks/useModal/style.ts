import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpened: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  z-index: ${({ isOpened }) => (isOpened ? 250 : -10)};

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  /* iOS Safari - overflow-hidden 대체 속성 */
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  z-index: 201;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100dvh;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    opacity: 30%;
    background-color: ${({ theme }) => theme.black};
  }
`;

export const Modal = styled.div<{ borderRadius: string }>`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 90dvh;
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ borderRadius }) => `${borderRadius} ${borderRadius} 0px 0px`};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const CloseHandle = styled.button`
  padding: 15px 10px;
  width: 100%;
  cursor: grab;
  border: 0;
  background-color: transparent;

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: '';
    margin: auto;
    width: 55px;
    height: 4px;
    border-radius: 10px;
    display: block;
    background-color: ${({ theme }) => theme.gray02};
  }
`;

export const Title = styled.div`
  /* margin: 5px 0 20px;
  padding-left: 20px; */
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.black.primary};
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
`;
