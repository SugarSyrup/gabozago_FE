import styled from "styled-components";


export const VideoTimeline = styled.div`
    width:calc(100% + 40px); 
    position:absolute;  
    left:0px;

    height:80px;
    padding: 16px 13px 12px 13px;
    overflow-x:hidden;
    background-color:${({theme}) => theme.blue05};

    display:flex;
    gap:6px;
    justify-content:flex-start;
    align-items:center;
`

export const TimeLineItem = styled.div`
    padding:10px 8px;
    border-radius: 4px;
    background: #E1E7FF;

    display:flex;
    align-items:flex-start;
    gap:2px;

    svg{
        width:24px;
        height:24px;

        path {
            fill:${({theme}) => theme.blue02};
        }
    }
`

export const TimeLineIndex = styled.span`
    width: 14px;
    height:14px;

    border-radius:100%;
    background-color:${({theme}) => theme.main};
    
    color: white;
    font-size: 7px;
    line-height: 15px;

    display:flex;
    justify-content:center;
    align-items:center;
`

export const TimeLineLinker = styled.div`
    display:flex;
    align-items:center;

    div {
        display:flex;
        flex-direction:column;
        align-items:center;

        svg{
            width: 19px;
            height: 19px; 
        }

        span{
            color: ${({theme}) => theme.blue02};
            font-size: 10px;
            letter-spacing: 0.27px;
            white-space:nowrap;
        }
    }

    &::before, &::after {
        content: "";
        width:20px;
        border-bottom:2px dotted ${({theme}) => theme.main};    
    }
`

export const TimeLineInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:6px;

    span:first-child{
        width:68px;
        
        font-size: 13px;
        font-weight: 600;
    }

    span:last-child{
        color: ${({theme}) => theme.gray01};
        font-size: 10px;
        font-weight: 400;
    }
`