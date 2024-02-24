import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin-top:30px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;

    gap:20px;
`

export const CreateMyTrip = styled(Link)`
    width:100%;
    margin-top:-5px;
    padding-top:24px;
    padding-bottom:24px;

    display:flex;
    justify-content:center;
    align-items:center;

    background-color:${({theme}) => theme.gray05};
    border-radius:10px;

    text-decoration:none;

    button {
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
    }

    span {
        font-size:14px;
    }

    svg{
        width:20px;
        height:20px;

        path{
            fill: ${({theme}) => theme.gray03};
        }
    }
`