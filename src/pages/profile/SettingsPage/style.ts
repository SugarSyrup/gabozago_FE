import styled from 'styled-components'

export const ContentsWrapper = styled.div`
  height: 90dvh;

  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background-color: ${({ theme }) => theme.gray05};
`

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
`

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
`

export const SettingsContainer = styled.div`
  height: 100%;
  padding: 20px 20px;
  padding-bottom: 0px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${({ theme }) => theme.white};
`

export const SettingTitleParagraph = styled.p`
  margin-bottom: 5px;
`

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
`

export const LeaveButton = styled.button`
  position: absolute;
  left: 20px;
  bottom: 140px;

  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.gray02};
`
