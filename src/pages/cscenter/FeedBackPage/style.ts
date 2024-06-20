import styled from 'styled-components'

export const ButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.gray07};

  position: fixed;
  bottom: 0px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TitleParagraph = styled.p`
  word-break: keep-all;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`
export const TitleDescParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;

  color: ${({ theme }) => theme.gray01};
`

export const TextArea = styled.textarea`
  padding: 20px;
  width: 100%;
  min-height: 350px;
  border: 1px solid ${({ theme }) => theme.gray04};
  border-radius: 4px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  resize: none;
`

export const TextCountParagraph = styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.gray02};
`

export const PopupContainer = styled.div`
  width: 100%;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  text-align: center;

  div {
    width: calc(100% + 40px);
    margin: 30px -20px -20px;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.gray04};
  }
`

export const PopupConfirmButton = styled.button`
  cursor: pointer;
  flex: 1 1 100%;
  padding: 14px;
  border: 0;
  color: ${({ theme }) => theme.main};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.gray06};
  }
`
