import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: grid;
    grid-template-rows: 1fr fit-content(100%);
    margin: auto;
    max-width: 500px;
    width: 100%;
    height: 100vh;

    overflow:auto;
`

export const ThumbnailWrapper = styled.img`
    width: 100%;
    height:340px;
    
    background-color:${({theme}) => theme.gray03 };
    position:absolute;
    top:0px;
    left:0px;
    z-index:2;
`

export const Header = styled.header`
    position:relative;
    
    width:100%;
    padding-top:340px;
    padding-left:20px;
    padding-right:20px;

    display:flex;
    flex-direction:column;   

    padding-bottom:25px;

    background-color:white;
`

export const Type = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 13px;
    font-weight: 400;
    line-height: 28px;
`

export const Title = styled.div`
    max-width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 18px;
    font-weight: 600;
`

export const UserContainer = styled.div`
    width: 100%;
    position:relative;

    display:flex;
    align-items:center;

    margin-top:20px;

    svg {
        width:40px;
        height:40px;
    }
`

export const AvatarImg = styled.img`
    width:40px;
    height:40px;
    border-radius:100%;
`

export const UserInfo = styled.div`
    margin-left:10px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:2px;
`

export const Name = styled.span`
    font-size: 14px;
    font-weight: 600;
`

export const Date = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 12px;
`

export const FollowBtn = styled.button`
    display: inline-flex;
    padding: 7px 10px;

    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;

    border:none;
    border-radius: 6px;
    background: ${({theme}) => theme.main};

    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;

    position:absolute;
    right:0px;

    svg{
        width:12px;
        height:12px;

        path {
            fill:white;
        }
    }
`

export const Contents = styled.div`
    margin-top:14px;
    
    background-color:white;
    padding-top:14px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:36px;
`

export const Day = styled.div`
    width:100%;
    padding: 6px 20px;
    margin-top:36px;
    border-radius:10px;

    background-color:${({theme}) => theme.main};

    display:flex;
    justify-content:space-between;

    span{
        color: white;
        font-size: 15px;
        font-weight: 600;
        line-height: 28px;
    }
`

export const SeperateLine = styled.div`
    transform:translateX(-20px);

    width: calc(100% + 40px);
    height:8px;


    background-color:${({theme}) => theme.gray06};
`

export const DayLink = styled.span`
    color:white;
    font-size: 12px;
    font-weight: 500;
    line-height: 28px; 
    text-decoration-line: underline;
`

export const Comments = styled.div`
    width:100%;
    margin-top:10px;
    padding-left:20px;
    padding-right:20px;

    background-color:white;
`

// 여행 일정 추가 Modal
export const ModalWrapper = styled.div`
    width:100%;
    max-width:500px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    bottom:0px;
    z-index:40;
`

export const CourseModalContainer = styled.div`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:34px;

    display:flex;
    flex-direction:column;
    gap:24px;
`

export const CourseModalHeader = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`

// 여행 일정이 없을때 Popup
export const PopupContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:18px;

    span {
        color: ${({theme}) => theme.gray01};
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
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:8px;
`

export const PopupButton = styled.button<{main:boolean}>`
    padding:12px 24px;
    border:none;
    border-radius:36px;

    background-color: ${({theme, main}) => main ? theme.main : "#F4F4F4" };
    color: ${({theme, main}) => main ? "white" : theme.gray01};
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.28px;
`

export const TravelThumbnailWrapper = styled.img`
    width:50px;
    height:50px;

    border-radius:100%;
    background-color:${({theme}) => theme.blue04};
`

export const ModalInfoText = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const TravelList = styled.ol`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    gap:16px;
`

export const TravelListHeader = styled.div`
    width:100%;

    display:flex;
    justify-content:space-between;
`

export const TravelListTitle = styled.span`
    color: ${({theme}) => theme.gray};
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.2px;
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

export const TravelName = styled.span`
    color: ${({theme}) => theme.gray};
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const TravelLocation = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 12px;
    line-height: 13px; 

    display:flex;
    align-items:center;
    gap:4px;

    svg{
        width:15px;
        height:15px;

        path {
            fill: ${({theme}) => theme.gray01};
        }
    }
`

export const TravelAddBtn = styled.div<{isClicked: boolean}>`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:2px;

    svg{
        width:24px;
        height:24px;

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


export const Alert = styled.div<{isOpen: boolean}>`
    width:calc(100% - 64px);
    height:42px;
    padding:10px 20px;

    border-radius:30px;
    background-color:${({theme}) => theme.main};

    position:absolute;
    bottom:100px;
    left: 32px;

    animation:${({isOpen}) => isOpen ? fadeIn : fadeOut} 0.15s ease-out;
    display:${({isOpen}) => isOpen ? "flex" : "none"};
    justify-content:space-between;
    align-items:center;

    color:white;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    line-height: 22px;

    svg{
        width:18px;
        height:18px;

        path {
            fill: white;
        }
    }
`

export const ModalOpenText = styled.span`
    color: vwhite;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-decoration-line: underline;
    cursor:pointer;
`


export const PlaceModalContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;

    padding-left:20px;
    padding-right:20px;
    margin-top:-20px;
`

export const PlaceModalTitle = styled.h4`
    margin-bottom:28px;
`

export const PlaceModalSelectBox = styled.select`
    margin-bottom:10px;
    padding:5px;
    border:none;

    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const DayList = styled.ol`
    width:100%;
    margin-top:16px;
    padding-bottom:36px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:6px;
`

export const DayItem = styled.div`
    width:100%;
    display:flex;
    padding:10px;

    background-color:${({theme}) => theme.gray06};
    border-radius:10px;
`

export const DayThumbnail = styled.img`
    width:70px;
    height:70px;

    border-radius:100%;
    background-color:${({theme}) => theme.blue04};
`

export const DayTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    gap:6px;

    margin-left:14px;
`

export const DayTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 22px; 
    letter-spacing: 0.2px;
`

export const DayDesc = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 10px;
    line-height: 14px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:5px;

    span {
        color: ${({theme}) => theme.gray01};
        font-size: 10px;
        line-height: 14px;
    }

    svg{
        width:12px;
        height:12px;

        path {
            fill:${({theme}) => theme.gray01};
        }
    }
`

export const SaveButton = styled.div`
    position:absolute;
    bottom:50px;
    z-index:500;

    background-color:${({theme}) => theme.main};

    color: white;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;

    padding:16px 100px;
    border-radius: 30px;
    cursor:pointer;
`

export const ScrapModalHeader = styled.div`
    width:100%;

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
    gap:10px;
`

export const CreateScrapFolder = styled.div<{isOpen: boolean}>`
    animation:${({isOpen}) => isOpen ? fadeIn : fadeOut} 0.15s ease-out;
    width: 100%;
    /* 추가 */
    height:100vh;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
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