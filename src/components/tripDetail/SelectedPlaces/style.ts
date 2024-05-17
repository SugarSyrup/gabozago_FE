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

