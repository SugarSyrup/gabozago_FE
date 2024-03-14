import styled from "styled-components"

export const PlaceContainer = styled.div`
    width:100%;

    margin-top:32px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`

export const PlaceIndex = styled.div`
    display:flex;
    align-items:center;
    gap:8px;

    span{
        font-size: 14px;
        font-weight: 400;
        line-height: 21.588px; /* 154.2% */
    }
`

export const IndexCircle = styled.div`
    width:18px;
    height:18px;

    background-color:black;
    border-radius:100%;
    color:white;

    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
`

export const PlaceHeader = styled.div`
    width:100%;

    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-top:18px;
`

export const PlaceNameContainer = styled.div`
    display:flex;
    align-items:center;
    gap:10px;

    svg{
        width:18px;
        height:18px;
    }
`

export const PlaceThumbnail = styled.img`
    width:40px;
    height:40px;
    border-radius:100%;

    background-color:${({theme}) => theme.gray03};
`

export const PlaceName = styled.span`
    font-size: 20px;
    font-weight: 600;
`

export const PlaceButtons = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`

export const PlaceButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:2px;

    svg{
        width:24px;
        height:24px;
        path{
            fill:${({theme}) => theme.gray}
        }
    }

    span{
        color:${({theme}) => theme.gray01};
        text-align: center;
        font-size: 8px;
    }
`

export const PlaceReview = styled.span`
    margin-top:20px;

    font-size: 14px;
    font-weight: 400;
    line-height: 26px;

    white-space:pre-line;
`
