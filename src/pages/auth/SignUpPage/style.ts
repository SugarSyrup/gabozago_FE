import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    width:100%;
    padding:6px 20px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    span{
        color: #000;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0.2px;
    }
`

export const FormContainer = styled.form`
    padding-top:24px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap:18px;
`

export const InputExplain = styled.span`
    display:inline-flex;
    justify-content:flex-start;
    align-items:center;
    gap:5px;

    img{
        width:16px;
        height:16px;

        border-radius:100%;
    }

    color: ${({theme}) => theme.gray02};
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const AlertMessage = styled.span<{color: "red" | "blue"}>`
    color: ${({color, theme}) => color === "blue" ? theme.main : theme.red};
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const ButtonWrapper = styled.div`
    position:absolute;
    bottom:45px;

    width:calc(100% - 40px);
`