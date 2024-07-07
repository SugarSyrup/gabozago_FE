import React, { Dispatch, useState } from 'react';

import { TMyTravelItem } from '@_types/MyTravelItem';
import LogoIcon from '../../../assets/icons/logo_small.svg?react';
import CalendarIcon from '../../../assets/icons/calendar.svg?react';
import LocationIcon from '../../../assets/icons/location.svg?react';

import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  currentSelectedItemId: number;
  setCurrentSelectedItem: Dispatch<React.SetStateAction<{ id: number; day?: number }>>;
}

function LocationAddItem({
  id,
  name,
  departureDate,
  arrivalDate,
  location,
  days,
  thumbnailURL,
  currentSelectedItemId,
  setCurrentSelectedItem,
}: TMyTravelItem & Props) {
  const [clickedDay, setClickedDay] = useState<number>(-1);

  return (
    <S.Container>
      <S.InfoContainer
        onClick={() => {
          if (currentSelectedItemId !== id) {
            setClickedDay(-1);
          }
          setCurrentSelectedItem({ id });
        }}
      >
        <S.MyTravelItemThumbnailWrapper>
          {thumbnailURL !== '' ? (
            <LogoIcon />
          ) : (
            <img src={thumbnailURL} alt={`${id} ${thumbnailURL}`} />
          )}
        </S.MyTravelItemThumbnailWrapper>
        <S.MyTravelItemTextContainer>
          <Typography.Title size="md">{name}</Typography.Title>
          <S.MyTravelItemText>
            <CalendarIcon />
            <Typography.Label size="md" color="inherit">
              {departureDate} ~ {arrivalDate}
            </Typography.Label>
          </S.MyTravelItemText>
          <S.MyTravelItemText>
            <LocationIcon />
            <Typography.Label size="md" color="inherit">
              {location.toLocaleString()}
            </Typography.Label>
          </S.MyTravelItemText>
        </S.MyTravelItemTextContainer>
      </S.InfoContainer>
      {currentSelectedItemId === id && (
        <S.DayList>
          {days.map((day, index) => (
            <S.DayItem
              key={`${id} ${day.day}`}
              isClicked={index === clickedDay}
              onClick={() => {
                setClickedDay(index);
                setCurrentSelectedItem({ id, day: day.day });
              }}
            >
              <Typography.Label size="lg" color="inherit">
                Day
                {day.day}
              </Typography.Label>
              <Typography.Label size="sm">
                {day.date.slice(5, 10).replace('-', '.')}({day.dayOfWeek})
              </Typography.Label>
            </S.DayItem>
          ))}
        </S.DayList>
      )}
    </S.Container>
  );
}

export default LocationAddItem;
