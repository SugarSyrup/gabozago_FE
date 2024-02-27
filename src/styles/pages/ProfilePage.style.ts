import styled from "styled-components";

export const SettingIconWrapper = styled.div`
    position:absolute;
    top:44px;
    right:24px;
`

export const FixedContainer = styled.div`
    position:absolute;
    left: 0px;
    top:0px;
    z-index:2;

    padding-top:40px;
    padding-left:24px;
    padding-right:24px;
    width:100%;

    background-color:white;
`

export const Content = styled.div`
    padding-top:200px;
`

export const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width: 100%;

    margin-top:24px;
`

export const UserProfile = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

export const Name= styled.span`
    font-size:18px;
    font-weight:700;
    letter-spacing: 0.2px;
`

export const ProfileEditBtn = styled.button`
    padding: 5px 11px;
    border:none;
    border-radius:6px;

    line-height:18px;
    font-size:11px;

    color:${({theme}) => theme.main};
    background-color:${({theme}) => theme.blue05};
`

export const Statics = styled.ol`
    width:100%;
    margin-top:10px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
`

export const StaticItem = styled.li`
    flex-grow: 1;
    height:68px;

    padding: 14px 18px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    border-radius:10px;
    background-color:${({theme}) => theme.gray06};
`

export const StaticItemName = styled.h4`
    color: ${({theme}) => theme.gray02};
    font-size: 11px;
    font-weight: 600;
    line-height: 22px;
`

export const StaticItemStat = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 22px; 
`

export const TapNavigationBar = styled.nav`
    width:100%;
    margin-top:26px;

    display:flex;
    gap:30px;
    justify-content:flex-start;
    align-items:center;
`

export const TapNavigation = styled.span<{isHighlight? : boolean}>`
    padding-bottom:6px;

    color:${({theme}) => theme.gray01};
    font-size:13px;
    font-weight:600;
    line-height:22px;
    letter-spacing: 0.2px;
    
    box-sizing:content-box;

    color: ${({theme, isHighlight}) => isHighlight ? theme.main : theme.gray01};
`

export const SeperateLine = styled.div`
    position:absolute;
    width:100%;
    height:2px;
    left:0px;
    background-color:${({theme}) => theme.gray05};
`

export const HighLightLine = styled.div<{position: string}>`
    position:absolute;
    width:60px;
    height:2px;
    background-color:${({theme}) => theme.main};
    
    left: ${({position}) => position === "trip" && "15px"};
    left: ${({position}) => position === "review" && "94px"};
    left: ${({position}) => position === "activity" && "173px"};

    transition: left 0.2s linear;
`