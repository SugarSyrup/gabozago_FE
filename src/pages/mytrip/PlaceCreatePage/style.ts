import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 15px 20px;

  svg {
    position: absolute;
    left: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
`;

export const InputList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 0px;

  border: none;
  border-bottom: 1px solid #d9d9d9;

  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  width: calc(100% - 40px);
  max-width: calc(500px - 40px);
  padding: 15px;

  position: fixed;
  bottom: 40px;
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 10px 20px 15px 20px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;
  background-color: ${({ isActive, theme }) => (isActive ? theme.main : '#A6A6A6')};
  cursor: pointer;
  border: none;

  svg {
    width: 28px;
    height: 28px;
    path {
      fill: white;
    }
  }
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

  background-color: ${({ isMain, theme }) => (isMain ? '#F3F6FF' : theme.gray06)};
  color: ${({ isMain, theme }) => (isMain ? theme.main : theme.black)};
  cursor: pointer;
`;
