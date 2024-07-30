import styled from 'styled-components';

export const Header = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
`;

export const DeleteIcon = styled.div`
  padding-top: 15px;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: black;
    }
  }
`;

export const MyTravelList = styled.div`
  width: 100%;
  margin-top: 20px;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const MyTravelHeader = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CreateNewTravelButton = styled.div`
  padding: 4px 15px;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: 20px;

  color: ${({ theme }) => theme.main};
  cursor: pointer;
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 500px;
  padding: 15px 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  background-color: white;
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;

  color: white;
  background-color: ${({ isActive, theme }) => (isActive ? theme.main : '#A6A6A6')};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupWrapper = styled.div<{ isOpend: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 500px;

  margin-left: -20px;

  position: fixed;
  top: 0;
  z-index: ${({ isOpend }) => (isOpend ? 100 : -1)};
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
