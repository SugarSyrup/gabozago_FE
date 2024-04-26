import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:5px;


`

export const ImgCarousel = styled.div`
    width:100%;
    display:flex;

    overflow-x:hidden;

    img{
        flex-shrink:0;
        width:100%;
        object-fit:contain;

        display:flex;
        justify-content:center;
        align-items:center;
    }
`

export const Desc = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height:16px;
    letter-spacing: 0.5px;
`