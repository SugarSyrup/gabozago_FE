import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BackButtonWrapper = styled.div`
    position:absolute;
    top:16px;
    left:20px;
`

export const ThumbnailWrapper = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;

    img{
        width:100%;
        max-height:100%;
        object-fit: contain;
    }
`

export const Header = styled.div<{paddingTop?:number}>`
    width:100%;
    margin-top:9px;
    padding-top:${({paddingTop}) => `${paddingTop}px`};

    display:flex;
    flex-direction:column;
`

export const Type = styled.span`
    color:${({theme}) => theme.gray02};
    font-size: 12px;
    font-weight: 400;
    line-height:20px;
    letter-spacing:0.1px;
`

export const Title = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
`

export const StationContainer = styled.div`
    margin-top:20px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:10px;
`

export const StationTitle = styled.span`
    color: ${({theme}) => theme.gray};
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing:0.15px;
`

export const NextArticle = styled.div`
    width:100%;
    padding:5px 20px;
    background-color:${({theme}) => theme.blue05};
    border-radius:6px;

    span{
        color: ${({theme}) => theme.gray};
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
    }

    a{
        color: ${({theme}) => theme.gray};
    }
`

export const Content = styled.div`
    margin-top:70px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap:50px;
`

export const Empty = styled.div`
    padding-bottom: 160px;
`