import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0px;
  z-index: 40;
`

export const PlaceModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
  margin-top: -20px;
`

export const PlaceModalTitle = styled.h4`
  margin-bottom: 28px;
`

export const PlaceModalSelectBox = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  border: none;

  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;
`

export const DayList = styled.ol`
  width: 100%;
  margin-top: 16px;
  padding-bottom: 36px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`

export const DayItem = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;

  background-color: ${({ theme }) => theme.gray06};
  border-radius: 10px;
`

export const DayThumbnail = styled.img`
  width: 70px;
  height: 70px;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.blue04};
`

export const DayTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;

  margin-left: 14px;
`

export const DayTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.2px;
`

export const DayDesc = styled.span`
  color: ${({ theme }) => theme.gray01};
  font-size: 10px;
  line-height: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  span {
    color: ${({ theme }) => theme.gray01};
    font-size: 10px;
    line-height: 14px;
  }

  svg {
    width: 12px;
    height: 12px;

    path {
      fill: ${({ theme }) => theme.gray01};
    }
  }
`

export const SaveButton = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 500;

  background-color: ${({ theme }) => theme.main};

  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;

  padding: 16px 100px;
  border-radius: 30px;
  cursor: pointer;
`
