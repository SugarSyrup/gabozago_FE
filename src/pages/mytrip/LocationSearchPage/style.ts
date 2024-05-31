import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  padding-top: 20px;

  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  position: relative;

  padding-left: 20px;
  padding-right: 20px;
`;

export const TabNavigation = styled.div`
  width: 100%;
  position: relative;
  //left: 0px;

  border-bottom: ${({ theme }) => `2px solid ${theme.gray04}`};

  display: flex;
  justify-content: space-between;

  padding: 10px 0px;
  margin-top: 10px;
`;

export const NavigationItem = styled.div<{ isHighlight: boolean }>`
  color: ${({ theme, isHighlight }) =>
    isHighlight ? theme.black : theme.gray01};
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ isHighlight }) => (isHighlight ? 700 : 500)};
  line-height: 22px;
  letter-spacing: 0.2px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

export const HighlightLine = styled.div<{ isHighlight: boolean }>`
  width: 50%;
  border-bottom: ${({ theme }) => `2px solid ${theme.main}`};

  position: absolute;
  left: ${({ isHighlight }) => (isHighlight ? "0px" : "50%")};
  bottom: -2px;

  transition: left 0.2s ease-in-out;
`;

export const Contents = styled.div`
  width: 100%;
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom:0px;

  width: 100%;
  max-width:500px;
  margin-left:-20px;
  padding-top: 18px;
  padding-bottom: 38px;
  padding-left: 30px;
  padding-right: 30px;

  background-color: ${({ theme }) => theme.gray07};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ScrapContent = styled.div`
  width: 100%;
  padding-top: 100px;
`;

export const PopupWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpen }) => (isOpen ? 100 : -10)};

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

  color: #727272;
  padding-top: 50px;

  span:last-child {
    margin-top: 10px;
  }

  span {
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

  background-color: ${({ isMain, theme }) =>
    isMain ? "#F3F6FF" : theme.gray06};
  color: ${({ isMain, theme }) => (isMain ? theme.main : theme.black)};
  cursor: pointer;
`;
