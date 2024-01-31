import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;
    position: relative;
`;

export const LocationsHeader = styled.div`
    margin-top: 26px;
    margin-bottom: 28px;
`;

export const Locations = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    position: relative;
    width: 100%;

    padding-left: 5px;
    padding-right: 5px;
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    padding-left: 5px;
    padding-right: 5px;
`;

export const SubmitButtonText = styled.span`
    color: white;
`;
