import styled from "styled-components";


export const CalendarContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:26px;

    height:70vh;
    overflow:auto;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`


export const Footer = styled.footer`
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index:2;

    height:200px;

    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
    gap: 14px;

    padding:15px 30px;

    width: 100%;
    overflow: auto;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%);
`;

export const Button = styled.button<{
    bgColor: boolean
}>`
    width:100%;
    padding:12px 20px;
    border-radius:30px;
    border:none;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;

    background-color: ${({theme, bgColor}) => bgColor ? theme.main : '#a6a6a6'};
    text-decoration: none;
    cursor:pointer;
    svg{
        width:28px;
        height:28px;

        path{
            fill:white;
        }
    }
`