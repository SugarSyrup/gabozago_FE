import styled from "styled-components"

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