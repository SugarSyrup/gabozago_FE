import { useState } from "react";

import * as S from "../../styles/mytrip/CalendarContainer.style.ts";

import Button from "../common/Button.tsx";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";

function CalendarContainer() {
    const [dateClickFlag, setDateClickFlag] = useState<boolean>(true);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [dateDiff, setDateDiff] = useState<number>(-1);

    function onDateClick(date:string) {
        if(dateClickFlag) {
            setEndDate("");
            setStartDate(date);
            setDateClickFlag(prev => !prev);
        } else {
            if(Number(date) < Number(startDate)) {
                setEndDate(startDate);
                setStartDate(date);
                setDateDiff(calculateDateDiff(date, startDate));
            } else {
                setEndDate(date);
                setDateDiff(calculateDateDiff(startDate, date));
            }
            setDateClickFlag(prev => !prev);
        }
    }

    
    function calculateDateDiff(date1:string, date2:string) {
        const dateDiffTime = new Date(`${date1.slice(0,4)}-${date1.slice(4,6)}-${date1.slice(6,8)}`).getTime() - new Date(`${date2.slice(0,4)}-${date2.slice(4,6)}-${date2.slice(6,8)}`).getTime();
        return (Math.abs(dateDiffTime/ (1000 * 60 * 60 * 24)));
    }

    function drawCalendars() {
        const elements = [];
        const currentDateInfo = new Date();

        for(let year = currentDateInfo.getFullYear(); year<=currentDateInfo.getFullYear()+10; year++) {
            for(let month = currentDateInfo.getMonth(); month<=12; year++) {
                elements.push(<Calendar year={year} month={month} onDateClick={onDateClick} startDate={startDate} endDate={endDate}/>)
            }
        }

        return elements;
    }

    return(
        <>
            <S.CalendarContainer>
                {drawCalendars()}
            </S.CalendarContainer>
            
            <S.Footer>
                <Link to="/mytrip/create/location">
                    <Button
                        size="lg"
                        type="normal"
                        disabled={startDate === "" && endDate === ""}
                        active={startDate !== "" && endDate !== ""}
                    >
                        {startDate !== "" && endDate !== "" ? 
                            `${startDate.slice(0,4)}.${startDate.slice(4,6)}.${startDate.slice(6,8)} - ${startDate.slice(0,4) !== endDate.slice(0,4) ? `${endDate.slice(0,4)}.` : ""}${startDate.slice(4,6) !== endDate.slice(4,6) ? `${endDate.slice(4,6)}.` : ""}${endDate.slice(6,8)} / ${dateDiff}박 ${dateDiff+1}일`
                            : "날짜를 선택해주세요." 
                        }
                    </Button>
                </Link>
            </S.Footer>
        </>
    )
}

export default CalendarContainer;