import styled from "styled-components";


export const InputContainer = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:9px;

    position:relative;
`

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.2px;
`

export const Input = styled.input`
    width:100%;
    padding:10px 16px;
    
    border-radius: 4px;
    border: 1px solid #DCDCDC;
    background: #F9F9F9;

    color: #ADADAD;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
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

export const InputAlert = styled.span<{hasExplain: boolean}>`
    position:absolute;
    bottom: ${({hasExplain}) => hasExplain ? "0px" : "-20px"};
    right: 0px;
`