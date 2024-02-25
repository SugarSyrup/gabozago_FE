import styled from "styled-components";

export const List = styled.ol`
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:16px;
`

export const Item = styled.li`
    width:100%;

    display:flex;
    flex-direction:column;
    gap:6px;

    padding-bottom:14px;
    border-bottom: 1px solid ${({theme}) => theme.gray04};
`

export const Comment = styled.span`
    display:flex;
    align-items:center;
    gap:6px;

    color: #121212;
    font-size: 14px;
    font-weight: 600;

    svg {
        width:16px;
        height:16px;

        path {
            fill: ${({theme}) => theme.blue02};
        }
    }
`

export const Title = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 12px;
    font-weight: 400;
`