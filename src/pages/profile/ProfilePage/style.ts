import styled from "styled-components";

export const SettingIconWrapper = styled.div`
    position:absolute;
    top:15px;
    right:20px;

    z-index:10;
    cursor:pointer;

    svg{
        width:30px;
        height:30px;

        path{
            width:30px !important;
            height:30px !important;
        }
    }
`

export const FixedContainer = styled.div`
    position:absolute;
    left: 0px;
    top:0px;
    z-index:2;

    padding-top:45px;
    padding-left:24px;
    padding-right:24px;
    width:100%;

    background-color:white;
`

export const Content = styled.div<{FixedContainerHeight: number | undefined}>`
    padding-top:${({FixedContainerHeight}) => FixedContainerHeight ? `${FixedContainerHeight - 40}px`  : "200px" };
`

export const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width: 100%;
`

export const UserProfile = styled.div`
    display:flex;
    align-items:center;
    gap:10px;

    svg {
        width:44px;
        height:44px;
        path{
            fill:${({theme}) => theme.main};
        }
    }

    img {
        width:44px;
        height:44px;
        border-radius:100%;
    }
`

export const ProfileEditBtn = styled.button`
    padding: 4px 20px;
    border:none;
    border-radius:6px;
    cursor:pointer;

    color:${({theme}) => theme.main};
`

export const UserIntroduce = styled.div`
    width:100%;
    padding:14px 20px;
    border-radius:10px;
    background-color:${({theme}) => theme.blue05};

    margin-top:10px;
`

export const Statics = styled.ol`
    width:100%;
    margin-top:10px;
    margin-bottom:6px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:10px;
`

export const StaticItem = styled.li<{isHover?: boolean}>`
    width:22%;
    padding: 6px 17px;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    border-radius:10px;
    background-color:${({theme}) => theme.gray06};

    &:hover {
        background-color:  ${({isHover, theme}) => isHover && theme.blue04};
        cursor:pointer;
    }
`

export const StaticItemName = styled.h4`
    color: #A6A6A6;
`

export const StaticItemStat = styled.span`
    color: ${({theme}) => theme.gray};
`


export const TapNavigationBar = styled.nav`
    width:100%;
    margin-top:20px;

    display:flex;
    gap:24px;
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
    
    left: ${({position}) => position === "trip" && "20px"};
    left: ${({position}) => position === "activity" && "96px"};

    transition: left 0.2s ease-in-out;
`