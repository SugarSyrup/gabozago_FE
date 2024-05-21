import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 1;
    display:flex;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    display:flex;
  }
  100% {
    opacity: 0;
    display:none;
  }
`;

export const AlertWrapper = styled.div`
    width:100%;
    max-width:500px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    bottom:0px;
    z-index:40;
`

export const Alert = styled.div<{isOpen: boolean}>`
    width:calc(100% - 64px);
    height:42px;
    padding:10px 20px;

    border-radius:30px;
    background-color:${({theme}) => theme.main};

    position:absolute;
    bottom:100px;
    left: 12px;

    animation:${({isOpen}) => isOpen ? fadeIn : fadeOut} 0.15s ease-out;
    display:${({isOpen}) => isOpen ? "flex" : "none"};
    justify-content:space-between;
    align-items:center;


    svg{
        width:18px;
        height:18px;

        path {
            fill: white;
        }
    }
`