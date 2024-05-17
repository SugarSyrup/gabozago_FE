import styled, {keyframes} from "styled-components"

export const ModalWrapper = styled.div`
    width:100%;
    max-width:500px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    bottom:0px;
    z-index:40;
    margin-left:-20px;
`

export const CourseModalContainer = styled.div`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:34px;

    display:flex;
    flex-direction:column;
`

export const CourseModalHeader = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`


export const TravelThumbnailWrapper = styled.div`
    width:40px;
    height:40px;
    position:relative;

    border-radius:100%;
    background-color:${({theme}) => theme.blue04};

    display:flex;
    justify-content:center;
    align-items: center;

    svg{
        width:16px !important;
        height:16px !important;
    }
`


export const TravelList = styled.ol`
    width:100%;
    padding-top:10px;
    padding-bottom:10px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    gap:15px;
`

export const TravelListHeader = styled.div`
    width:100%;
    padding-bottom:10px;

    display:flex;
    justify-content:space-between;
`

export const TravelCreate = styled.span`
    color:${({theme}) => theme.main};
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.2px;
    cursor:pointer;
`

export const TravelItem = styled.li`
    width:100%;
    padding-top:5px;
    padding-bottom:5px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`


export const TravelInfoContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:10px;
`

export const TravelInfoTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:3px;
`


export const TravelAddBtn = styled.div<{isClicked: boolean}>`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:2px;

    svg{
        width:32px;
        height:32px;

        path {
            fill: ${({theme, isClicked}) => isClicked ? theme.main : theme.gray01};
        }
    }

    span{
        color: ${({theme, isClicked}) => isClicked ? theme.main : theme.gray01};
        text-align: center;
        font-size: 8px;
    }
`


export const ScrapModalHeader = styled.div`
    width:100%;
    margin-top:-24px;
    padding-top:10px;
    padding-bottom:10px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    svg {
        width:30px;
        height:30px;
    }
`

export const HeaderLeftItems = styled.div`
    display:flex;
    align-items:center;
    gap:15px;
`

export const SeperateLine = styled.div`
    width:calc(100% + 40px);
    border-bottom:1px solid #e4e4e4;
    margin-left:-20px;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 1;
    display:flex;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    display:flex;
  }
  100% {
    opacity: 0;
    display:none;
  }
`;

export const CreateScrapFolder = styled.div<{isOpen: boolean}>`
    animation:${({isOpen}) => isOpen ? fadeIn : fadeOut} 0.15s ease-out;
    display:${({isOpen}) => isOpen ? "flex" : "none"};
    width: 100%;
    /* 추가 */
    height:100vh;
    left: 0;
    right: 0;
    bottom: 0;

    justify-content: center;
    align-items: center;
    
    overflow: hidden;
    z-index: 40;
    &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top:0;
        bottom:0;
        width: 100%;
        height: 100vh;
        opacity: 30%;
        background-color: ${({ theme }) => theme.black};
    }
`

export const CreateScrapFolderContainer = styled.div`
    width: calc(100% - 40px);
    background-color:white;
    border-radius:10px;

    padding: 18px 24px;

    position:absolute;
    bottom:12px;

    position: absolute;

    display:flex;
    flex-direction:column;
    gap: 13px;

    input {
        border:none;
        border-bottom:1px solid ${({theme}) => theme.gray03};

        padding-top:5px;
        padding-bottom:5px;

        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0.2px;

        margin-bottom:12px;
    }
`

export const CreateScrapHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    span {
        font-size: 12px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0.2px;
    }
`

export const SaveText = styled.span`
    color:${({theme}) => theme.main};
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.2px;
`