import styled from "styled-components";

export const CalendarHeader = styled.span`
    font-size:14px;
    font-weight:600;
    line-height:22px;
`

export const Calendar = styled.div`
    width:100%;
    margin-top:14px;

    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items:center;
    justify-items:center;
    grid-row-gap:4px;
`

//요일
export const Day = styled.div`
    width:32px;
    height:18px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:13px;
    font-weight:500;
    line-height:18px;
    color:rgba(60, 60, 67, 0.30);
`
interface DateProps {
    isDuring: boolean;
}

//날짜
export const Date = styled.div<DateProps>`
    width:100%;
    height:44px;
    padding-top:4px;
    padding-bottom:4px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:16px;
    font-weight:500;
    line-height:25px;

    background-color: ${({isDuring}) => isDuring && "#E0E6FF"};
    background-clip: content-box;    

    position:relative;
    z-index:1
`

export const DateHightlight = styled.div<{isStartDate:boolean}>`
    width:36px;
    height:36px;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:100%;

    background-color:#5276FA;
    color:white;
    
    ${({isStartDate}) => isStartDate ? 
        `&::before {
            content: "";
            width:50%;
            height:100%;

            background-color:white;

            position:absolute;
            left:0;
            z-index:-1;
        }` 
        : `&::after {
            content: "";
            width:50%;
            height:100%;

            background-color:white;

            position:absolute;
            right:0;
            z-index:-1;
        }`
    }
`

export const Empty = styled.div`
    width:44px;
    height:44px;
`

