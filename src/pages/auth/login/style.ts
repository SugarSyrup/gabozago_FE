import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const BrandCopy = styled.span`
    margin-top:8px;

    display:flex;
    flex-direction:column;
    align-items:center;

    color: ${({theme}) => theme.main};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`


export const OAuthSquareButton = styled.div`
    width:100%;
    margin-top:90px;
    padding: 9px 0px;
    border-radius:4px;
    background-color:#FFE812;

    display:flex;
    gap:4px;
    justify-content:center;
    align-items:center;

    img {
        width:26px;
        height:26px;
    }

    span{
        font-size: 14px;
        font-weight:600;
        line-height: 22px;
    }
`

export const SeperateTextLine = styled.div`
    width:100%;
    color: #D4D4D4;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;

    display:flex;
    gap:17px;
    align-items:center;
    word-break:keep-all;

    margin-top:12px;

    &::before, &::after {
        content:"";
        width:100%;
        border-bottom:1px solid #D4D4D4;
    }
`

export const OAuthButtons = styled.div`
    width:100%;
    margin-top:22px;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
`

export const OAuthCircleButton = styled.div<{color: string}>`
    width:40px;
    height:40px;
    background-color:${({color}) => color};

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:100%;

    img {
        width:20px;
        height:20px;
    }
`
export const HelpText = styled(Link)`
    margin-top:106px;

    color: #AFAFAF;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-decoration-line: underline;
`