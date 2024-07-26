import { useEffect, useRef, useState } from 'react';
import Month from '../Month';

import * as S from './style';

function PastNFutureCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentDateRef = useRef<HTMLDivElement>(null);
  const pastInfinitScrollRef = useRef<HTMLDivElement>(null);
  const futureInfinitScrollRef = useRef<HTMLDivElement>(null);

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
    const pastMonth = flagDate.getMonth();
    setPastHead({ year: pastYear, month: pastMonth });

    for (let i = 0; i < 5; i++) {
      const year = flagDate.getFullYear();
      const month = flagDate.getMonth() + 1;
      setData((prev) => [...prev, { year, month }]);

      flagDate.setMonth(flagDate.getMonth() + 1);
    }

    const futureYear = flagDate.getFullYear();
    const futureMonth = flagDate.getMonth();
    setFutureHead({ year: futureYear, month: futureMonth });
  }, []);

  // past Infinite Scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (pastHead === undefined) return;
          const flagDate = new Date();
          flagDate.setFullYear(pastHead.year);
          flagDate.setMonth(pastHead.month - 2);

          for (let i = 0; i < 5; i++) {
            const year = flagDate.getFullYear();
            const month = flagDate.getMonth() + 1;
            setData((prev) => [{ year, month }, ...prev]);
            flagDate.setMonth(flagDate.getMonth() - 1);
          }
          setPastHead({
            year: Number(flagDate.getFullYear()),
            month: Number(flagDate.getMonth()),
          });

          // console.log(containerRef.current.scrollTop);
          // containerRef.current.scrollTo({
          //   top: 320 * 4 + 294 + containerRef.current.scrollTop,
          // });
          setTimeout(() => {
            if (containerRef.current) {
              // console.log(containerRef.current.scrollTop);
              containerRef.current.scrollTo(0, 320 * 4 + 294 + containerRef.current.scrollTop);
              // console.log(containerRef.current.scrollTop);
            }
          }, 0);
          // containerRef.current.scrollTo(0, 32000);
          // console.log(containerRef.current.scrollTop);
          // containerRef.current.style.overflow = 'none';
        }
      });
    }, options);

    if (pastInfinitScrollRef.current !== null) {
      observer.observe(pastInfinitScrollRef.current as HTMLDivElement);
    }

    return () => observer.disconnect();
  }, [pastHead, pastInfinitScrollRef]);

  // future Infinite Scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (futureHead === undefined) return;
          const flagDate = new Date();
          flagDate.setFullYear(futureHead.year);
          flagDate.setMonth(futureHead.month);

          for (let i = 0; i < 5; i++) {
            const year = flagDate.getFullYear();
            const month = flagDate.getMonth() + 1;
            setData((prev) => [...prev, { year, month }]);
            flagDate.setMonth(flagDate.getMonth() + 1);
          }

          setFutureHead({
            year: Number(flagDate.getFullYear()),
            month: Number(flagDate.getMonth()),
          });
        }
      });
    }, options);

    if (futureInfinitScrollRef.current !== null) {
      observer.observe(futureInfinitScrollRef.current);
    }

    return () => observer.disconnect();
  }, [futureHead, futureInfinitScrollRef]);

  return (
    <>
      <S.CalendarContainer ref={containerRef}>
        <div ref={pastInfinitScrollRef} />
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
        <div ref={futureInfinitScrollRef} />
      </S.CalendarContainer>
    </>
  );
}

export default PastNFutureCalendar;
