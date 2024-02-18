import styled from "styled-components";

export const Header = styled.header`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    position:relative;

    svg{
        position:absolute;
        left:0px;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    margin-top:40px;
`

export const InputList = styled.ol`
    display:flex;
    flex-direction:column;
    gap:22px;
`

export const Input = styled.input`
    width:100%;
    padding: 18px 0px;

    border:none;
    border-bottom:1px solid #d9d9d9;

    font-size:16px;

    &:focus {
        outline:none;
    }
`

export const ButtonWrapper = styled.div`
    width:100%;

    position:absolute;
    bottom:40px;
`