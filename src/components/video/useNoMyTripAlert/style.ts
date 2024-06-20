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

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  span {
    color: ${({ theme }) => theme.gray01};
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.28px;
  }
`

export const PopupTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.2px;
`

export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const PopupButton = styled.button<{ main: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 36px;

  background-color: ${({ theme, main }) => (main ? theme.main : '#F4F4F4')};
  color: ${({ theme, main }) => (main ? 'white' : theme.gray01)};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.28px;
`
