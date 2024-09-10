import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { dateClickFlagState, datesState } from '@_recoil/mytrip/createData';
import { popupValue } from '@_recoil/common/PopupValue';
import ImportantIcon from '@_icons/exclamation_circle.svg?react';

import usePopup from '../../../../hooks/usePopup';
import Typography from '../../Typography';

import * as S from './style';

interface Props {
  year: number;
  month: number;
  pastOff?: boolean;
}

const Month = forwardRef(({ year, month, pastOff }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const [opacity, setOpacity] = useState<number>(0.3);
  const [{ startDate, endDate }, setDates] = useRecoilState(datesState);
  const [firstPastDateClickFlag, setFirstPastDateClickFlag] = useState<boolean>(true);
  const [dateClickFlag, setDateClickFlag] = useRecoilState(dateClickFlagState);

  const setPopupUI = useSetRecoilState(popupValue);
  const { popupOpen, popupClose } = usePopup();

  const monthRef = useRef<HTMLDivElement>(null);

  function onDateClick(date: string) {
    const currentDate = new Date();

    if (
      currentDate >
        new Date(
          Number(date.slice(0, 4)),
          Number(date.slice(4, 6)) - 1,
          Number(date.slice(6, 8)) + 1,
        ) &&
      firstPastDateClickFlag
    ) {
      setFirstPastDateClickFlag(false);
      setPopupUI({
        Icon: <ImportantIcon />,
        Header: '지난 여행 일정으로 등록하시겠어요?',
        Description: `선택하신 날짜는 지난 일정이에요.
          해당 일정을 등록하면 ‘다가오는 여행'이 아닌,
          ‘지난 여행 일정'에 등록되어요.`,
        ConfirmButton: {
          text: '네, 등록할게요',
          onClick: () => {
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

            popupClose();
          },
        },
        CloseButton: {
          text: '아니요',
          onClick: () => {
            setFirstPastDateClickFlag(true);
            popupClose();
          },
        },
      });
      popupOpen();
    } else if (dateClickFlag) {
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
            if (pastOff !== true || Number(todayDate) <= Number(thisDate)) {
              onDateClick(thisDate);
            }
          }}
          isPastDay={Number(todayDate) > Number(thisDate)}
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

  useEffect(() => {
    let currentMonthRef;
    if (ref) {
      currentMonthRef = ref as React.MutableRefObject<HTMLDivElement | null>;
    } else {
      currentMonthRef = monthRef;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryIntersectionRatio = Math.floor(entry.intersectionRatio * 100) / 100;
          if (entryIntersectionRatio >= 0.85) {
            setOpacity(1);
          } else if (entryIntersectionRatio <= 0.35) {
            setOpacity(0.3);
          } else {
            setOpacity(entryIntersectionRatio);
          }
        });
      },
      {
        threshold: [
          0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5, 0.525, 0.55, 0.575, 0.6, 0.625,
          0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9,
        ],
      },
    );

    if (currentMonthRef.current) {
      observer.observe(currentMonthRef.current);
    }
  }, []);

  return (
    <div ref={ref || monthRef} style={{ scrollSnapAlign: 'center', opacity }}>
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
