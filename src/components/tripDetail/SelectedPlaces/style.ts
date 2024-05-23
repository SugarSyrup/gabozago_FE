import styled from "styled-components";

export const PopupWrapper = styled.div<{isOpen: boolean}>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index:${({isOpen}) => isOpen? 100 : -10};

    margin: auto;
    max-width: 500px;
    max-height: 100vh;
    width: 100%;
    height: 100vh;
`

export const PopupContentsContainer = styled.div`
    width:100%;
    padding:10px;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:20px;

    svg{
        width:40px;
        height:40px;
    }
`

export const PopupTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    color:#727272;

    span:last-child{
        margin-top:10px;
    }
`

export const PopupButtons = styled.div`
    width:100%;
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:12px;
`

export const PopupButton = styled.button<{isMain: boolean}>`
    width:100%;
    padding-top:12px;
    padding-bottom:12px;

    border:none;
    border-radius:30px;

    display:flex;
    justify-content:center;
    align-items:center;

    background-color: ${({isMain, theme}) => isMain ? "#F3F6FF" : theme.gray06};
    color: ${({isMain, theme}) => isMain ? theme.main : theme.black};
    cursor:pointer;
`

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