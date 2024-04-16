import styled from "styled-components";


export const StationList = styled.ol`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;

    width:100%;
    padding:12px 20px;
    background-color:${({theme}) => theme.blue05};
    border-radius:6px;
`

export const StationItem = styled.li`
    position:relative;

    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    gap:16px;
`

export const Linker = styled.div<{
    isFirst? : boolean,
    isLast? : boolean,
}>`
    height:55px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;


    &::before{
        content:"";
        width:1px;
        height:12px;
        ${({isFirst}) => !isFirst && "border-right:2px solid #849FFF" };
    }

    &::after {
        content:"";
        width:1px;
        height:26px;
        ${({isLast}) => !isLast && "border-right:2px solid #849FFF" };
    }
`;

export const TextContainer = styled.div<{
    isLast?: boolean
}>`
    width:100%;
    height:54px;

    padding-top:12px;
    padding-bottom:12px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    gap:6px;

    border-bottom:${({theme, isLast}) => !isLast && `1px solid ${theme.gray03}`};
`

export const StationNumber = styled.span`
    color: ${({theme}) => theme.gray};
    font-size: 12px;
    font-weight: 600;
`

export const StationName = styled.span`
    color: ${({theme}) => theme.gray};
    font-size: 12px;
    font-weight: 400;
`
