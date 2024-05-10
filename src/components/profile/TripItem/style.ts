import styled from "styled-components";

export const ModalWrapper = styled.div<{isOpen: boolean}>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({isOpen}) => isOpen ? 100 : -10} ;

  margin: auto;
  max-width: 500px;
  max-height: 100vh;
  width: 100%;
  height: 100vh;

`

export const TravelSettings = styled.div`
    padding: 20px 30px;

    display:flex;
    flex-direction:column;
    gap:20px;
`

export const Container = styled.li`
    width:100%;
    padding:15px 10px;
    border-radius:15px;
    background-color:${({theme}) => theme.blue05};

    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    gap:13px;

    position:relative;
`

export const ThumbnailWrapper = styled.div`
    width:70px;
    height:70px;

    border-radius:100%;
    background-color:${({theme}) => theme.gray03};

    display:flex;
    justify-content:center;
    align-items:center;
`

export const Info = styled.div`
    padding-top:5px;
    padding-bottom:5px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:3px;
`

export const Name = styled.span`
    font-size:14px;
    font-weight:600;

    margin-bottom:3px;
`

export const Desc = styled.span`
    color:${({theme}) => theme.gray01};
    font-size:10px;
    font-weight:500;

    display:flex;
    align-items:center;
    gap:4px;

    svg {
        width:16px;
        height:16px;

        path {
            fill: ${({theme}) => theme.main};
        }
    }
`

export const OptionWrapper = styled.div`
    position:absolute;
    top:15px;
    right:17px;

    svg path {
        fill : ${({theme}) => theme.gray02};
    }
`

export const PopupContainer = styled.div`
    padding:30px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
`

export const PopupText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const PopupButtons = styled.div`
    width:100%;

    display:flex;
    align-items:center;
    gap:12px;
`

export const PopupButton = styled.div`
    width:50%;
    padding-top:12px;
    padding-bottom:12px;

    display:flex;
    justify-content:center;
    align-items:center;

    background-color:${({theme}) => theme.gray06};
    border-radius:30px;
    cursor: pointer;
`

export const ChangePopupContainer = styled.form`
    display:flex;
    flex-direction:column;
    gap:14px;
`

export const ChangePopupHeader = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ChangePopupInput = styled.input`
    width:100%;
    height:28px;

    color: ${({theme}) => theme.gray};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;

    border:none;
    border-bottom:1px solid #e4e4e4;
`