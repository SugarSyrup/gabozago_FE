import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpen }) => (isOpen ? 500 : -10)};

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const TravelSettings = styled.div`
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    cursor: pointer;
  }
`;

export const PopupContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PopupText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PopupButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PopupButton = styled.div`
  width: 50%;
  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.gray06};
  border-radius: 30px;
  cursor: pointer;
`;

export const ChangePopupContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ChangePopupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChangePopupInput = styled.input`
  width: 100%;
  height: 28px;

  color: ${({ theme }) => theme.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  border: none;
  border-bottom: 1px solid #e4e4e4;
`;

export const FormButton = styled.button`
  border: none;
  background-color: inherit;

  cursor: pointer;
`;
