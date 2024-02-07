import * as S from "../../styles/mytrip/Calendar.style";

interface Props{
    year:number;
    month: number;
    startDate?: string;
    endDate?:string;
    onClick?:(date:string) => void;
}

function Calendar({year, month, onClick} : Props) {
    function FillDate() {
        const currentMonthStartDay = new Date(year,month,1).getDay();
        const currentMonthLastDate = new Date(year,month,0).getDate();
        const arr = [];

        for(let i = 0; i < currentMonthStartDay + 1; i++) {
            arr.push(<S.Empty/>)
        }

        for(let i = 1; i <= currentMonthLastDate; i++) {
            arr.push(<S.Date 
                isHighlight={false}
                isDuring={false}
                onClick={(e) => {
                if(onClick) {
                    onClick(`${year}/${month}/${e.currentTarget.innerText}`);
                }
            }}>{i}</S.Date>)
        }

        return arr;
    }

    return(
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
    )
}

export default Calendar;