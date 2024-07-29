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

export const PopupContainer = styled.div`
  position: absolute;
  width: 100%;
  /* 추가 */
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 40;

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
export const Popup = styled.div<{ padding?: string }>`
  width: 90%;
  position: relative;
  padding: ${({ padding }) => padding || '24px'};
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  padding-bottom: 20px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
