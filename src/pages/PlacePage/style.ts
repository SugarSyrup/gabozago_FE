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

export const ThumbnailWrapper = styled.div`
    width:100%;

    position:absolute;
    top:0px;
    left:0px;

    img {
        width:100%;
        object-fit:contain;
    }
`

export const ThumbnailEmpty = styled.div<{padding?: number}>`
    width:100%;
    padding-top:${({padding}) => padding + "px"};
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
        path: {
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
    padding:8px 32px;

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
            fill:${({theme}) => theme.gray};
        }
    }

    span {
        color: ${({theme}) => theme.gray};
        font-size: 11px;
        font-weight: 400;
        line-height: 22px;
    }
`

export const RecommendArticleTitle = styled.span`
    display:block;
    margin-top:30px;

    color: ${({theme}) => theme.black};
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    strong {
        color:${({theme}) => theme.main};
    }
`

export const RecommendArticleList = styled.div`
    width:100%;
    overflow-x:scroll;

    margin-top:16px;

    display:flex;
    gap:20px;

    -ms-overflow-style: none;
    &::-webkit-scrollbar{
        display:none;
    }
`

export const RecommendArticleItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:8px;

    img {
        width:250px;
        height:170px;
        object-fit:contain;
        border-radius:10px;
    }

    span{
        color: ${({theme}) => theme.black};
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0.2px;

        display:block;
        width:207px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    span:last-child{
        color: ${({theme}) => theme.gray01};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 9px;
        letter-spacing: 0.2px;

        strong {
            color: ${({theme}) => theme.main};
        }
    }
`