import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalContainer= styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    grid-template-columns: 100%;
    margin: auto;

    max-width: 500px;
    max-height: 100vh;
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.white};
    z-index:0;
`

export const TopBarText = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;

    padding-bottom:14px;
    padding-top:14px;
`

export const ContentContainer = styled.div`
    width:100%;

    position:absolute;
    top:0px;
    left:0px;

    img {
        width:100%;
        object-fit:contain;
    }
`

export const ImgSlider = styled.div`
    width:100%;
    overflow:auto;
    position:relative;

    display:flex;
    justify-content:flex-start;
    align-items:center;
    scroll-snap-type: x mandatory;

    img {
        width:100%;
        height:300px;
        scroll-snap-align: start;
        object-fit:contain;
        flex-shrink:0;
        background-color:yellow;
    }

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`

export const ImgRegistContainer = styled.div`
    width:100%;
    height:200px;

    background-color: #E4E4E4;
    color: #A6A6A6;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:8px;

    svg{
        width:56px;
        height:56px;
        cursor:pointer;
    }

    input {
        display:none;
    }
`;

export const ContentList = styled.div`
    width:100%;
    padding-left:20px;
    padding-right:20px;
`

export const InfomationList = styled.ol`
    width:100%;
    margin-top:8px;
    padding-left:20px;
    padding-right:20px;

    display:flex;
    flex-direction:column;
    gap:2px;
`

export const InfomationItem = styled.li`
    padding-top:10px;
    padding-bottom:10px;

    display:flex;
    justify-content:flex-start;
    gap:20px;

    svg {
        width:20px;
        height:20px;
        path {
            fill:${({theme}) => theme.gray};
        }
    }
`

export const InfomationText = styled.span`
    color: ${({theme}) => theme.black};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
`

export const InfomationLink = styled(Link)`
    color: ${({theme}) => theme.main};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; 
    letter-spacing: 0.25px;
    text-decoration-line: underline;
`


export const Buttons = styled.div`
    width:100%;
    margin-top:14px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
`

export const Button = styled.div`
    width:100%;
    padding:9px 27px;

    border-radius:6px;
    background-color:${({theme}) => theme.gray05};

    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;

    svg{
        width:18px;
        height:18px;

        path {
            fill:#A6A6A6;
        }
    }
`
