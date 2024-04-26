import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:10px;
`

export const Index = styled.span`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:6px;

    span{
        color: ${({theme}) => theme.black};
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.32px;
    }
`

export const Title = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 20px;
    font-weight: 600;
`