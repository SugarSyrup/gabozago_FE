import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 98px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.gray06};

    position: relative;
`;

export const InfoContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height:98px;

    padding:15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const ThumbnailWrapper = styled.div`
    width: 68px;
    height: 68px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.blue04};
    border-radius: 100%;

    display:flex;
    justify-content:center;
    align-items:center;

    svg{
        width:24px;
        height:24px;
    }
`;

export const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:5px;
`

export const Infos = styled.div`
    display:flex;
    flex-direction:column;
    gap:2px;
`

export const Info = styled.span`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:5px;

    svg{
        width:16px;
        height:16px;

        path{
            fill:${({theme}) => theme.main};
        }
    }
`;

export const MenuIcon = styled.div`
    cursor:pointer;
    position: absolute;
    right: 15px;
    top: 15px;
`;

