// import { useEffect } from 'react';
import { ForwardedRef, forwardRef, useEffect } from 'react';
import Typography from '../../Typography';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { dateClickFlagState, datesState } from '@_recoil/mytrip/createData';

interface Props {
  year: number;
  month: number;
}

const Month = forwardRef(({ year, month }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const [{ startDate, endDate }, setDates] = useRecoilState(datesState);
  const [dateClickFlag, setDateClickFlag] = useRecoilState(dateClickFlagState);

  function onDateClick(date: string) {
    if (dateClickFlag) {
      setDates({
        startDate: date,
        endDate: '',
      });
      setDateClickFlag((prev) => !prev);
    } else {
      if (Number(date) < Number(startDate)) {
        setDates({
          startDate: date,
          endDate: startDate,
        });
      } else {
        setDates({
          startDate,
          endDate: date,
        });
      }
      setDateClickFlag((prev) => !prev);
    }
  }

  function FillDate() {
    const currentMonthStartDay = new Date(year, month - 1, 1).getDay();
    const currentMonthLastDate = new Date(year, month, 0).getDate();
    const today = new Date();
    const arr = [];

    for (let i = 0; i < currentMonthStartDay; i++) {
      arr.push(<S.Empty />);
    }

    for (let i = 1; i <= currentMonthLastDate; i++) {
      const thisDate = `${year}${String(month).padStart(2, '0')}${String(i).padStart(2, '0')}`;
      const todayDate = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
      arr.push(
        <S.Date
          isDuring={Number(startDate) <= Number(thisDate) && Number(endDate) >= Number(thisDate)}
          onClick={() => {
            onDateClick(thisDate);
          }}
          isToday={Number(todayDate) === Number(thisDate)}
        >
          {Number(startDate) === Number(thisDate) || Number(endDate) === Number(thisDate) ? (
            <S.DateHightlight
              isStartDate={Number(startDate) === Number(thisDate)}
              isThisDate={Number(startDate) === Number(endDate)}
            >
              {i}
            </S.DateHightlight>
          ) : (
            i
          )}
          {Number(todayDate) === Number(thisDate) && (
            <S.Today>
              <Typography.Label size="md" color="inherit">
                오늘
              </Typography.Label>
            </S.Today>
          )}
        </S.Date>,
      );
    }

    return arr;
  }

  return (
    <div ref={ref} style={{ scrollSnapAlign: 'center' }}>
      <S.CalendarHeader>
        {year}년{month}월
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
    </div>
  );
});

Month.displayName = 'Month';
export default Month;
