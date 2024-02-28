import styled from "styled-components";

export const Header = styled.header`
    width:100%;
    padding-left:20px;
    padding-right:20px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const CloseIconWrapper = styled.div`
    svg path {
        stroke: #121212;
    }
`

export const SubmitBtn = styled.button<{isActive: boolean}>`
    border:none;
    background-color:inherit;

    color: ${({theme, isActive}) => isActive ? theme.main : theme.gray01};
    font-size: 16px;
    font-weight: ${({isActive}) => isActive ? 600 : 400};
    letter-spacing: 0.2px;
`

export const Form = styled.form`
    width:100%;
    padding-top:22px;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:16px;
`

export const AvatarWrapper = styled.div`
    position:relative;

    svg path {
        fill:#bcbcbc;    
    }

    input {
        display:none;
    }
`

export const CameraIconWrapper = styled.label`
    position:absolute;
    right:9px;
    bottom: 9px;

    width:24px;
    height:24px;
`

export const InputContainer = styled.div`
    width:100%;
    margin-bottom:6px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:9px;

    label {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.2px;
    }

    input {
        width:100%;
        padding:10px 16px;

        font-size:14px;
        font-weight:400;
        line-height:22px;

        border:1px solid #dcdcdc;
        border-radius:4px;

        box-shadow:none;
    }

    input::placeholder {
        color: ${({theme}) => theme.grey02};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.2px;
    }
`