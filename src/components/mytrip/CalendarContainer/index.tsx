import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import CalendarAddIcon from "../../../assets/icons/calendar_add.svg?react";
import { datesState } from "../../../recoil/mytrip/createData.ts";

import Typography from "../../common/Typography/index.tsx";
import Calendar from "../Calendar/index.tsx";

import * as S from "./style.ts";


function CalendarContainer() {
    const navigate = useNavigate();
    const [dateClickFlag, setDateClickFlag] = useState<boolean>(true);
    const [dateDiff, setDateDiff] = useState<number>(-1);

    const [dates, setDates] = useRecoilState(datesState);

    useEffect(() => {
        if(dates.startDate !== "" && dates.endDate !== "") {
            setDateDiff(calculateDateDiff(dates.startDate, dates.endDate));
        }
    }, [])

    function onDateClick(date:string) {
        if(dateClickFlag) {
            setDates({
                startDate: date,
                endDate:""
            })
            setDateClickFlag(prev => !prev);
        } else {
            if(Number(date) < Number(dates.startDate)) {
                setDates({
                    startDate: date,
                    endDate:dates.startDate
                })
                setDateDiff(calculateDateDiff(date, dates.startDate));
            } else {
                setDates({
                    startDate: dates.startDate,
                    endDate: date
                })
                setDateDiff(calculateDateDiff(dates.startDate, date));
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
        for(let month = currentDateInfo.getMonth(); month<=12; month++) {
            elements.push(<Calendar year={currentDateInfo.getFullYear()} month={month} onDateClick={onDateClick} startDate={dates.startDate} endDate={dates.endDate}/>)
        }
        for(let year = currentDateInfo.getFullYear() + 1; year<=currentDateInfo.getFullYear() + 10; year++) {
            for(let month = 1; month<=12; month++) {
                elements.push(<Calendar year={year} month={month} onDateClick={onDateClick} startDate={dates.startDate} endDate={dates.endDate}/>)
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
                <S.Button 
                    bgColor={dates.startDate !== "" && dates.endDate !== ""} 
                    onClick={() => { 
                        if(dates.startDate !== "" && dates.endDate !== "") {
                            navigate('/mytrip/create/location');
                        }
                    }}
                >
                    <CalendarAddIcon />
                    <Typography.Title size="lg" color={"white"}>
                        {dates.startDate !== "" && dates.endDate !== "" ? 
                            `${dates.startDate.slice(0,4)}.${dates.startDate.slice(4,6)}.${dates.startDate.slice(6,8)} ${dates.startDate === dates.endDate ? "" : "-"} ${dates.startDate.slice(0,4) !== dates.endDate.slice(0,4) ? `${dates.endDate.slice(0,4)}.` : ""}${dates.startDate.slice(4,6) !== dates.endDate.slice(4,6) ? `${dates.endDate.slice(4,6)}.` : ""}${dates.startDate.slice(6,8) !== dates.endDate.slice(6,8) ? `${dates.endDate.slice(6,8)}.` : ""} / ${dateDiff}박 ${dateDiff+1}일`
                            : "날짜를 선택해주세요." 
                        }
                    </Typography.Title>
                </S.Button>
            </S.Footer>
        </>
    )
}

export default CalendarContainer;