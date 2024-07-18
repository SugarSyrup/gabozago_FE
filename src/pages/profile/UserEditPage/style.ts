import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIconWrapper = styled.div`
  svg path {
    stroke: #121212;
  }
`;

export const SubmitBtn = styled.button<{ isActive: boolean }>`
  border: none;
  background-color: inherit;

  color: ${({ theme, isActive }) => (isActive ? theme.main : theme.gray01)};
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  letter-spacing: 0.2px;
  cursor: pointer;
`;

export const Form = styled.form`
  margin-bottom: 35px;
  width: 100%;
  padding-top: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  position: relative;

  svg path {
    fill: #bcbcbc;
  }

  input {
    display: none;
  }
`;

export const CameraIconWrapper = styled.label`
  position: absolute;
  right: 9px;
  bottom: 9px;

  width: 24px;
  height: 24px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;

  label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 16px;

    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    border: 1px solid #dcdcdc;
    border-radius: 4px;

    box-shadow: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.grey02};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  textarea {
    height: 84px;
    resize: none;
  }
`;

export const ExitButton = styled.button`
  margin-top: 11px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.gray01};
  border: 0;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`;

export const PopupContainer = styled.div`
  width: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  div {
    width: calc(100% + 40px);
    margin: 0 -20px -20px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
`;

export const PopupConfirmButton = styled.button`
  width: calc(50% - 10px);
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
`;
