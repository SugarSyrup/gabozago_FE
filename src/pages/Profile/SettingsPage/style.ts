import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% + 40px);
  margin-left: -20px;
`;

export const SeperateLine = styled.div`
  background-color: ${({ theme }) => theme.gray05};
  width: 100%;
  height: 12px;
  flex-shrink: 0;
`;

export const UserSettingButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;

  div {
    text-align: left;
  }

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;

    path {
      fill: #a6a6a6;
    }
  }
`;

export const UserSettingLeftItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg,
  img {
    width: 52px;
    height: 52px;
  }

  img {
    border-radius: 100%;
  }
`;

export const SettingsContainer = styled.div`
  height: 100%;
  padding-bottom: 0px;

  display: flex;
  flex-direction: column;
`;

export const SettingListContainer = styled.div`
  width: 100%;
  padding: 20px 20px 10px;
  background-color: ${({ theme }) => theme.white};
`;

export const SettingTitleParagraph = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const SettingItem = styled.li`
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  color: ${({ theme }) => theme.gray01};

  &:active {
    background-color: ${({ theme }) => theme.gray06};
  }

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: #a6a6a6;
    }
  }
`;

export const LeaveButton = styled.button`
  align-self: self-start;
  margin-left: 20px;

  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.gray02};
`;

export const LocationAccessContainer = styled.div`
  padding: 20px 20px 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;

  span {
    color: #727272;
  }
`;

export const LocationAccessToggleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleSwitch = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  position: relative;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue.primary : theme.colors.gray.tertiary};

  transition: all 0.3 linear;
  div {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border-radius: 100%;
    background-color: white;

    position: absolute;
    left: ${({ isActive }) => !isActive && '3px'};
    right: ${({ isActive }) => isActive && '3px'};
  }
`;
