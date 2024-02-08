import { useState } from "react";
import Calendar from "./Calendar";

import * as S from "../../styles/mytrip/CalendarContainer.style.ts";

function CalendarContainer() {
    const [dateClickFlag, setDateClickFlag] = useState<boolean>(true);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    function onDateClick(date:string) {
        if(dateClickFlag) {
            setEndDate("");
            setStartDate(date);
            setDateClickFlag(prev => !prev);
        } else {
            if(Number(date) < Number(startDate)) {
                setEndDate(startDate);
                setStartDate(date);
            } else {
                setEndDate(date);
            }

            setDateClickFlag(prev => !prev);
        }
    }

    return(
        <S.CalendarContainer>
            <Calendar year={2023} month={12} onDateClick={onDateClick} startDate={startDate} endDate={endDate}/>
        </S.CalendarContainer>
    )
}

export default CalendarContainer;