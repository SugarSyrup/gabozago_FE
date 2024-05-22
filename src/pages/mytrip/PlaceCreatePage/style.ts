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
    width:calc(100% - 40px);
    padding: 15px;

    position:absolute;
    bottom:40px;
`

export const Button = styled.button<{isActive: boolean}>`
    width:100%;
    padding: 10px 20px 15px 20px;
    border-radius:30px;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;

    color:white;
    background-color:${({isActive, theme}) => isActive ? theme.main : "#A6A6A6"};
    cursor: pointer;
    border:none;

    svg{
        width:28px;
        height: 28px;
        path{
            fill:white;
        }
    }
`