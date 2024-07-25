import { useEffect, useRef, useState } from 'react';
import Month from '../Month';

import * as S from './style';

function CalendarContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentDateRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<{ year: number; month: number }[]>([]);
  const [pastHead, setPastHead] = useState<{ year: number; month: number }>();
  const [futureHead, setFutureHead] = useState<{ year: number; month: number }>();

  useEffect(() => {
    setTimeout(() => {
      currentDateRef.current?.scrollIntoView({
        block: 'center',
      });
    }, 0);
  }, []);

  useEffect(() => {
    const flagDate = new Date();
    flagDate.setMonth(flagDate.getMonth() - 2);

    const pastYear = flagDate.getFullYear();
    const pastMonth = flagDate.getMonth() + 1;
    setPastHead({ year: pastYear, month: pastMonth });

    for (let i = 0; i < 5; i++) {
      const year = flagDate.getFullYear();
      const month = flagDate.getMonth() + 1;
      setData((prev) => [...prev, { year, month }]);

      flagDate.setMonth(flagDate.getMonth() + 1);
    }

    const futureYear = flagDate.getFullYear();
    const futureMonth = flagDate.getMonth() + 1;
    setFutureHead({ year: futureYear, month: futureMonth });
  }, []);

  return (
    <>
      <S.CalendarContainer ref={containerRef}>
        {data.map((calendarData, index) => {
          const currentDate = new Date();
          const isToday =
            calendarData.year === currentDate.getFullYear() &&
            calendarData.month === currentDate.getMonth() + 1;
          return (
            <Month
              key={`${calendarData.year}-${calendarData.month}-${index}`}
              year={calendarData.year}
              month={calendarData.month}
              ref={isToday ? currentDateRef : undefined}
            />
          );
        })}
      </S.CalendarContainer>
    </>
  );
}

export default CalendarContainer;
