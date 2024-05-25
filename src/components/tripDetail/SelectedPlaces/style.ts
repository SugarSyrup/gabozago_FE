import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    padding: 15px 0px;
    position:relative;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    gap:10px;
`

export const SelectedPlaceList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    max-width:100%;
    max-height:140px;
    overflow:hidden;
`;

export const Button = styled.button<{isActive: boolean}>`
    width:100%;
    border:none;
    border-radius:30px;
    padding:10px 0px 15px 0px;

    background-color:${({isActive, theme}) => isActive ? theme.main : "#A6A6A6"};

    display:flex;
    justify-content:center;
    align-items:center;
    gap:5px;
    cursor:pointer;
`