import * as S from "../../styles/mytrip/Calendar.style";

interface Props{
    year:number;
    month: number;
    startDate?: number;
    endDate?:number;
}

function Calendar({year, month} : Props) {
    function FillDate() {
        const currentMonthStartDay = new Date(year,month,1).getDay();
        const currentMonthLastDate = new Date(year,month,0).getDate();
        const arr = [];

        for(let i = 0; i < currentMonthStartDay + 1; i++) {
            arr.push(<S.Empty/>)
        }

        for(let i = 1; i <= currentMonthLastDate; i++) {
            arr.push(<S.Date>{i}</S.Date>)
        }

        return arr;
    }

    return(
        <>
            <S.CalendarHeader>
                2023년 12월
            </S.CalendarHeader>
            <S.CalendarContainer>
                <S.Day>SUN</S.Day>
                <S.Day>MON</S.Day>
                <S.Day>TUE</S.Day>
                <S.Day>WED</S.Day>
                <S.Day>THU</S.Day>
                <S.Day>FRI</S.Day>
                <S.Day>SAT</S.Day>
                {FillDate()}
            </S.CalendarContainer>
        </>
    )
}

export default Calendar;