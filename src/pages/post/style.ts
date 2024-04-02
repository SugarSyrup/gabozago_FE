import styled from "styled-components";

export const ThumbnailWrapper = styled.img`
    width: 100%;
    height:340px;
    
    background-color:${({theme}) => theme.gray03 };
    position:absolute;
    top:0px;
    left:0px;
    z-index:2;
`

export const Header = styled.header`
    position:relative;
    
    width:100%;
    padding-top:340px;
    padding-left:20px;
    padding-right:20px;

    display:flex;
    flex-direction:column;   

    padding-bottom:25px;

    background-color:white;
`

export const Type = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 13px;
    font-weight: 400;
    line-height: 28px;
`

export const Title = styled.div`
    max-width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 18px;
    font-weight: 600;
`

export const UserContainer = styled.div`
    width: 100%;
    position:relative;

    display:flex;
    align-items:center;

    margin-top:20px;

    svg {
        width:40px;
        height:40px;
    }
`

export const AvatarImg = styled.img`
    width:40px;
    height:40px;
    border-radius:100%;
`

export const UserInfo = styled.div`
    margin-left:10px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:2px;
`

export const Name = styled.span`
    font-size: 14px;
    font-weight: 600;
`

export const Date = styled.span`
    color: ${({theme}) => theme.gray01};
    font-size: 12px;
`

export const FollowBtn = styled.button`
    display: inline-flex;
    padding: 7px 10px;

    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;

    border:none;
    border-radius: 6px;
    background: ${({theme}) => theme.main};

    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;

    position:absolute;
    right:0px;

    svg{
        width:12px;
        height:12px;

        path {
            fill:white;
        }
    }
`

export const Contents = styled.div`
    margin-top:14px;
    
    background-color:white;
    padding-top:14px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:36px;
`

export const Day = styled.div`
    width:100%;
    padding: 6px 20px;
    margin-top:36px;
    border-radius:10px;

    background-color:${({theme}) => theme.main};

    display:flex;
    justify-content:space-between;

    span{
        color: white;
        font-size: 15px;
        font-weight: 600;
        line-height: 28px;
    }
`

export const SeperateLine = styled.div`
    transform:translateX(-20px);

    width: calc(100% + 40px);
    height:8px;


    background-color:${({theme}) => theme.gray06};
`

export const DayLink = styled.span`
    color:white;
    font-size: 12px;
    font-weight: 500;
    line-height: 28px; 
    text-decoration-line: underline;
`

export const Comments = styled.div`
    width:100%;
    margin-top:10px;
    padding-left:20px;
    padding-right:20px;

    background-color:white;
`
