import styled from "styled-components";


export const CalendarContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:26px;
`


export const Footer = styled.footer`
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index:2;

    height:200px;
    padding-bottom:50px;

    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: center;
    gap: 14px;

    padding-left: 25px;
    padding-right: 25px;

    width: 100%;
    overflow: auto;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%);
`;