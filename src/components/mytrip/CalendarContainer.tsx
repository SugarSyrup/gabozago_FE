import { useState } from "react";
import Calendar from "./Calendar";

import * as S from "../../styles/mytrip/CalendarContainer.style.ts";

function CalendarContainer() {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    function onDateClick(date:string) {
        if(startDate !== "") {
            setEndDate(date);
        } else {
            setStartDate(date);
        }
    }

    return(
        <S.CalendarContainer>
            <Calendar year={2023} month={12} onClick={onDateClick} startDate={startDate} endDate={endDate}/>
        </S.CalendarContainer>
        )
}

export default CalendarContainer;