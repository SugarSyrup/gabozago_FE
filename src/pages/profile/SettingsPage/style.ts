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

export const LeaveButton = styled.button`
  margin-top: 10px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.gray02};
`;
