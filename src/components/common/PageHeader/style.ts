import styled from "styled-components"

export const Header = styled.header`
    width:100%;
    padding:20px 20px;
    position:relative;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const MobileHeader = styled.header`
    width:100%;
    padding:20px 20px;
    padding-top: constant(safe-area-inset-top, 20px); 
    padding-bottom: constant(safe-area-inset-top, 20px); 
    position:relative;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const LeftItemWrapper = styled.div`
    position:absolute;
    left:20px;
`

export const RightItemWrapper = styled.div`
    position:absolute;
    right:20px;
`