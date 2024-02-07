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
    gap:4px;
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
    isHighlight: boolean;
    isDuring: boolean;
}

//날짜
export const Date = styled.div<DateProps>`
    width:44px;
    height:44px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:16px;
    font-weight:500;
    line-height:25px;
`

export const Empty = styled.div`
    width:44px;
    height:44px;
`

