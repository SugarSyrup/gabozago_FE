import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import CalendarAddIcon from '../../../assets/icons/calendar_add.svg?react';
import { datesState, selectedLocationsState } from '../../../recoil/mytrip/createData.ts';

import Typography from '../../common/Typography/index.tsx';
import Calendar from '../Calendar/index.tsx';
import { addLocationState, createTravelState } from '../../../recoil/mytrip/createTravelState.ts';
import * as S from './style.ts';
import { patch, post } from '../../../utils/api.ts';

function CalendarContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dateClickFlag, setDateClickFlag] = useState<boolean>(true);
  const [dateDiff, setDateDiff] = useState<number>(-1);
  const createType = useRecoilValue(createTravelState);
  const addLocation = useRecoilValue(addLocationState);
  const setSelectedLocation = useSetRecoilState(selectedLocationsState);

  const [dates, setDates] = useRecoilState(datesState);

  useEffect(() => {
    if (dates.startDate !== '' && dates.endDate !== '') {
      setDateDiff(calculateDateDiff(dates.startDate, dates.endDate));
    }
  }, []);

  function onDateClick(date: string) {
    if (dateClickFlag) {
      setDates({
        startDate: date,
        endDate: '',
      });
      setDateClickFlag((prev) => !prev);
    } else {
      if (Number(date) < Number(dates.startDate)) {
        setDates({
          startDate: date,
          endDate: dates.startDate,
        });
        setDateDiff(calculateDateDiff(date, dates.startDate));
      } else {
        setDates({
          startDate: dates.startDate,
          endDate: date,
        });
        setDateDiff(calculateDateDiff(dates.startDate, date));
      }
      setDateClickFlag((prev) => !prev);
    }
  }

  function calculateDateDiff(date1: string, date2: string) {
    const dateDiffTime =
      new Date(`${date1.slice(0, 4)}-${date1.slice(4, 6)}-${date1.slice(6, 8)}`).getTime() -
      new Date(`${date2.slice(0, 4)}-${date2.slice(4, 6)}-${date2.slice(6, 8)}`).getTime();
    return Math.abs(dateDiffTime / (1000 * 60 * 60 * 24));
  }

  function drawCalendars() {
    const elements = [];
    const currentDateInfo = new Date();
    let month = currentDateInfo.getMonth() + 1;
    let year = currentDateInfo.getFullYear();

    if (createType === 'edit' && Number(dates.startDate.slice(0, 4)) <= year) {
      year = Number(dates.startDate.slice(0, 4));
      if (Number(dates.startDate.slice(4, 6)) < month) {
        month = Number(dates.startDate.slice(4, 6));
      }
    }

    for (month; month <= 12; month++) {
      elements.push(
        <Calendar
          year={currentDateInfo.getFullYear()}
          month={month}
          onDateClick={onDateClick}
          startDate={dates.startDate}
          endDate={dates.endDate}
        />,
      );
    }
    year += 1;

    for (year; year <= currentDateInfo.getFullYear() + 10; year++) {
      for (let month = 1; month <= 12; month++) {
        elements.push(
          <Calendar
            year={year}
            month={month}
            onDateClick={onDateClick}
            startDate={dates.startDate}
            endDate={dates.endDate}
          />,
        );
      }
    }

    return elements;
  }

  return (
    <>
      <S.CalendarContainer>{drawCalendars()}</S.CalendarContainer>

      <S.Footer>
        <S.Button
          bgColor={dates.startDate !== '' && dates.endDate !== ''}
          onClick={() => {
            setSelectedLocation([]);
            if (dates.startDate !== '' && dates.endDate !== '') {
              switch (createType) {
                case 'create':
                  navigate('/mytrip/create/location', { replace: true });
                  return;
                case 'add':
                  post<{ id: number }>('/my-travel', {
                    title: `${addLocation} 여행`,
                    departure_date: `${dates.startDate.slice(0, 4)}-${dates.startDate.slice(4, 6)}-${dates.startDate.slice(6, 8)}`,
                    arrival_date: `${dates.endDate.slice(0, 4)}-${dates.endDate.slice(4, 6)}-${dates.endDate.slice(6, 8)}`,
                    regions: addLocation,
                  }).then((response) => {
                    navigate(-1);
                  });
                  return;
                case 'edit':
                  patch('/my-travel', {
                    id: Number(id),
                    departureDate: `${dates.startDate.slice(0, 4)}-${dates.startDate.slice(4, 6)}-${dates.startDate.slice(6, 8)}`,
                    arrivalDate: `${dates.endDate.slice(0, 4)}-${dates.endDate.slice(4, 6)}-${dates.endDate.slice(6, 8)}`,
                  }).then((response) => {
                    navigate(-1);
                  });
              }
            }
          }}
        >
          <CalendarAddIcon />
          <Typography.Title size="lg" color="white">
            {dates.startDate !== '' && dates.endDate !== ''
              ? `${dates.startDate.slice(0, 4)}.${dates.startDate.slice(4, 6)}.${dates.startDate.slice(6, 8)} ${dates.startDate === dates.endDate ? '' : '~'} ${dates.startDate.slice(0, 4) !== dates.endDate.slice(0, 4) ? `${dates.endDate.slice(0, 4)}.` : ''}${dates.startDate.slice(4, 6) !== dates.endDate.slice(4, 6) ? `${dates.endDate.slice(4, 6)}.` : ''}${dates.startDate.slice(6, 8) !== dates.endDate.slice(6, 8) ? `${dates.endDate.slice(6, 8)}.` : ''} / ${dateDiff}박 ${dateDiff + 1}일`
              : '날짜를 선택해주세요.'}
          </Typography.Title>
        </S.Button>
      </S.Footer>
    </>
  );
}

export default CalendarContainer;
