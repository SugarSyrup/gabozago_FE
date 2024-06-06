import { useEffect, useRef, useState } from "react";
import * as S from "./style";

interface Props{
    year:number;
    month: number;
    startDate: string;
    endDate:string;
    onDateClick:(date:string) => void;
}

function Calendar({year, month, startDate, endDate, onDateClick} : Props) {
    const [isLoading, setIsLoading] = useState(true);
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!calendarRef.current) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setIsLoading(false);
                }
            })
        })

        observer.observe(calendarRef.current);
    }, [])

    function FillDate() {
        const currentMonthStartDay = new Date(year,month-1,1).getDay();
        const currentMonthLastDate = new Date(year,month,0).getDate();
        const arr = [];

        for(let i = 0; i < currentMonthStartDay; i++) {
            arr.push(<S.Empty/>)
        }

        for(let i = 1; i <= currentMonthLastDate; i++) {
            const thisDate = `${year}${String(month).padStart(2, "0")}${String(i).padStart(2, "0")}`;
            arr.push(
                <S.Date 
                    isDuring={Number(startDate) <= Number(thisDate) && Number(endDate) >= Number(thisDate)}
                    onClick={() => {
                        onDateClick(thisDate);
                }}>
                {Number(startDate) === Number(thisDate) || Number(endDate) === Number(thisDate) ? 
                    <S.DateHightlight isStartDate={Number(startDate) === Number(thisDate)} isThisDate={Number(startDate) === Number(endDate)}>{i}</S.DateHightlight>
                    : i
                }
                </S.Date>
            )
        }

        return arr;
    }

    return(
        <div ref={calendarRef}>
            {isLoading ? 
                <></>
                :
                    <>
                        <S.CalendarHeader>
                            {year}년 {month}월
                        </S.CalendarHeader>
                        <S.Calendar>
                            <S.Day>SUN</S.Day>
                            <S.Day>MON</S.Day>
                            <S.Day>TUE</S.Day>
                            <S.Day>WED</S.Day>
                            <S.Day>THU</S.Day>
                            <S.Day>FRI</S.Day>
                            <S.Day>SAT</S.Day>
                            {FillDate()}
                        </S.Calendar>
                    </>
        }
        </div>
    )
}

export default Calendar;