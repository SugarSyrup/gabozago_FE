import styled, { css } from "styled-components";

export const FormContainer = styled.form`
    padding-top:24px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap:18px;
`

export const HeaderText = styled.span`
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.2px;
`


export const ButtonWrapper = styled.button`
    position:absolute;
    bottom:45px;

    width:calc(100% - 40px);
    padding:17px 0px;

    background-color: ${({ theme }) => theme.gray03};
    
    cursor: pointer;
    border: none;
    border-radius: 30px;
    box-sizing:border-box;

    color: ${({ theme }) => theme.white};
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    &:disabled {
        background-color: ${({ theme }) => theme.main};
        color: ${({ theme }) => theme.white };
    }
`
