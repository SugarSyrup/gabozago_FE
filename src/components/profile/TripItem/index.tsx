import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import KebabMenuIcon from '../../../assets/icons/menu_kebab.svg?react';
import LocationIcon from '../../../assets/icons/location.svg?react';
import CalendarIcon from '../../../assets/icons/calendar.svg?react';
import SmallLogoIcon from '../../../assets/icons/logo_small.svg?react';
import useMyTripModal from '../../../hooks/useMyTripModal';
import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  id: number;
  title: string;
  departureDate: string;
  arrivalDate: string;
  location: string[];
  thumbnailURL: string;
}

function TripItem({ id, title, location, departureDate, arrivalDate, thumbnailURL }: Props) {
  const navigate = useNavigate();
  const { MyTripModal, modalOpen, modalClose, isModalOpend } = useMyTripModal({
    id,
    title,
    departureDate,
    arrivalDate,
  });

  return (
    <>
      <MyTripModal />
      <S.Container
        onClick={(e) => {
          if (e.target.tagName == 'svg' || e.target.tagName == 'path') {
            modalOpen();
          } else {
            navigate(`/mytrip/${id}`);
          }
        }}
      >
        <S.ThumbnailWrapper>
          {thumbnailURL ? <img src={thumbnailURL} alt="thumbnail" /> : <SmallLogoIcon />}
        </S.ThumbnailWrapper>
        <S.Info>
          <S.Name>
            <Typography.Title size="md" noOfLine={2} color="inherit">
              {title}
            </Typography.Title>
          </S.Name>
          <S.Desc>
            <CalendarIcon />
            <Typography.Label size="md" color="inherit">
              {departureDate.replace('-', '.').replace('-', '.')} ~{' '}
              {arrivalDate.slice(0, 4) === departureDate.slice(0, 4)
                ? arrivalDate.slice(5).replace('-', '.').replace('-', '.')
                : arrivalDate.replace('-', '.').replace('-', '.')}
            </Typography.Label>
          </S.Desc>
          <S.Desc>
            <LocationIcon />
            <Typography.Label size="md" color="inherit">
              {location.toLocaleString()}
            </Typography.Label>
          </S.Desc>
        </S.Info>
        <S.OptionWrapper>
          <KebabMenuIcon />
        </S.OptionWrapper>
      </S.Container>
    </>
  );
}

export default TripItem;
