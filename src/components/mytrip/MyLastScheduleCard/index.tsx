import { useNavigate } from 'react-router-dom';
import LocationIcon from '../../../assets/icons/location.svg?react';
import KebabMenuIcon from '../../../assets/icons/menu_kebab.svg?react';
import LogoSmallIcon from '../../../assets/icons/logo_small_blue04_text.svg?react';
import CalendarIcon from '../../../assets/icons/calendar.svg?react';

import Typography from '../../common/Typography';
import * as S from './style';
import useMyTripModal from '../../../hooks/useMyTripModal';

interface Props {
  id: number;
  title: string;
  departure_date: string;
  arrival_date: string;
  regions: string[];
  thumbnailURL: string;
  isUpcoming: boolean;
}

function MyLastScheduleCard({
  id,
  title,
  departure_date,
  arrival_date,
  regions,
  thumbnailURL,
  isUpcoming,
}: Props) {
  const navigate = useNavigate();
  const { MyTripModal, modalOpen } = useMyTripModal({
    id,
    title,
    departureDate: departure_date,
    arrivalDate: arrival_date,
  });

  return (
    <>
      <MyTripModal />
      <S.Card isUpcoming={isUpcoming}>
        <S.InfoContainer>
          <S.ThumbnailWrapper isUpcoming={isUpcoming}>
            {thumbnailURL ? <img src={thumbnailURL} alt="thumbnail" /> : <LogoSmallIcon />}
          </S.ThumbnailWrapper>
          <S.TextContainer
            onClick={() => {
              navigate(`/mytrip/${id}`);
            }}
          >
            <Typography.Title size="md" noOfLine={2} maxWidth={150}>
              <span style={{ wordBreak: 'break-all' }}>{title}</span>
            </Typography.Title>
            <S.Infos>
              <S.Info>
                <CalendarIcon />
                <Typography.Label size="md" color="#424242">
                  {departure_date} ~ {arrival_date}
                </Typography.Label>
              </S.Info>
              <S.Info>
                <LocationIcon />
                <Typography.Label size="md" color="#424242">
                  {regions.join(', ')}
                </Typography.Label>
              </S.Info>
            </S.Infos>
          </S.TextContainer>
          <S.MenuIcon
            onClick={(e) => {
              e.preventDefault();
              modalOpen();
            }}
          >
            <KebabMenuIcon />
          </S.MenuIcon>
        </S.InfoContainer>
      </S.Card>
    </>
  );
}

export default MyLastScheduleCard;
