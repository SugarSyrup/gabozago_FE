import styled from "styled-components"

export const ArticleItem = styled.div<{opacity: number}>`
    display:flex;
    flex-direction:column;
    gap:5px;
    justify-content:flex-start;
    align-items:flex-start;

    opacity: ${({opacity}) => opacity};
`

export const ThumbnailWrapper = styled.div`
    width:100%;
    border-radius:10px;

    position:relative;
    width:100%;
    padding-bottom:100%;
    overflow:hidden;

    background-color:${({theme}) => theme.gray};

    div{
        position:absolute;
        bottom:15px;
        left:15px;
    }

    svg{
        width:40px;
        height:40px;

        position:absolute;
        right:20px;
        top:20px;
    }
`

export const Thumbnail = styled.img`
    width:100%;
    position:absolute;
`
