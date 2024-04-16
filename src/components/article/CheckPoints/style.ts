import styled from "styled-components";

export const CheckPointList = styled.div`
    margin-top:45px;
    margin-bottom:40px;

    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.main};
    padding:14px 16px;

    display:flex;
    flex-direction:column;
    gap:14px;
`

export const CheckPointTitle = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 14px;
    font-weight: 700;

    margin-bottom:-4px;
`

export const CheckPointItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    gap:11px;
`

export const CheckPointText = styled.div`
    display:flex;
    flex-direction:column;
`

export const CheckPoint = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
`

export const CheckPointDesc = styled.span`
    color: #4E4E4E;
    font-size: 10px;
    font-weight: 400;
`
