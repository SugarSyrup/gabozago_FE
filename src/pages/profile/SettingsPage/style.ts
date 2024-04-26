import styled from "styled-components";

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.gray05};
`;

export const UserSettingButton = styled.button`
  width: 100%;
  padding: 8px 20px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  border: 0;
  background-color: ${({ theme }) => theme.white};

  div {
    text-align: start;

    p:first-child {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
    }
    p:last-child {
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      color: ${({ theme }) => theme.gray01};
    }
  }
`;

export const SettingsContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${({ theme }) => theme.white};
`;

export const SettingTitleParagraph = styled.p`
  margin-bottom: 11px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const SettingItem = styled.li`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.gray01};

  &:active {
    background-color: ${({ theme }) => theme.gray06};
  }
`;

export const LogOutButton = styled.button`
  padding: 0;
  width: fit-content;
  border: 0;
  background-color: transparent;
  text-decoration: underline;
  color: ${({ theme }) => theme.red};
  cursor: pointer;
`;

export const PopupContainer = styled.div`
  p {
    text-align: center;
    padding: 20px 0 38px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.black};
  }

  div {
    margin: 0 -20px -20px;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.gray04};
  }
`;

export const PopupConfirmButton = styled.button<{
  type: "secondary" | "primary";
}>`
  cursor: pointer;
  flex: 1 1 100%;
  padding: 14px;
  border: 0;
  color: ${({ theme, type }) =>
    type === "secondary" ? theme.gray02 : theme.main};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;

  &:last-of-type {
    border-left: 1px solid ${({ theme }) => theme.gray04};
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray06};
  }
`;
