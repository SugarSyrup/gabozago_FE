import PageTemplate from '@_common/PageTemplate';

import * as S from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BottomButtonContainer from '@_common/BottomButtonContainer';
import CalendarAddIcon from '@_icons/calendar_add.svg?react';
import Typography from '@_common/Typography';
import XIcon from '@_icons/x.svg?react';
import Heading from '@_common/Heading';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { datesState, selectedLocationsState } from '@_recoil/mytrip/createData';
import FutureCalendar from '@_common/Calendar/FutureCalendar';
import { calculateDateDiff } from '@_utils/calendar';
import { post } from '@_utils/api';

function PlaceMyTripCreate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dates = useRecoilValue(datesState);

  return (
    <PageTemplate
      nav={
        <S.Footer>
          <BottomButtonContainer
            bgColor={dates.startDate !== '' && dates.endDate !== '' ? 'blue' : 'gray'}
            onClick={() => {
              if (dates.startDate !== '' && dates.endDate !== '') {
                post<{ id: number }>('/my-travel', {
                  title: `${searchParams.get('location')} 여행`,
                  departure_date: `${dates.startDate.slice(0, 4)}-${dates.startDate.slice(4, 6)}-${dates.startDate.slice(6, 8)}`,
                  arrival_date: `${dates.endDate.slice(0, 4)}-${dates.endDate.slice(4, 6)}-${dates.endDate.slice(6, 8)}`,
                  regions: searchParams.get('location'),
                }).then((res) => {
                  post('/my-travel/community/place', {
                    placeId: Number(searchParams.get('placeId')),
                    myTravelId: res.data.id,
                    day: 1,
                  }).then(() => {
                    navigate(-2);
                  });
                });
              }
            }}
          >
            <S.BottomButton>
              <CalendarAddIcon />
              <Typography.Title size="lg" color="white">
                {dates.startDate !== '' && dates.endDate !== ''
                  ? `${dates.startDate.slice(0, 4)}.${dates.startDate.slice(4, 6)}.${dates.startDate.slice(6, 8)} ${dates.startDate === dates.endDate ? '' : '~'} ${dates.startDate.slice(0, 4) !== dates.endDate.slice(0, 4) ? `${dates.endDate.slice(0, 4)}.` : ''}${dates.startDate.slice(4, 6) !== dates.endDate.slice(4, 6) ? `${dates.endDate.slice(4, 6)}.` : ''}${dates.startDate.slice(6, 8) !== dates.endDate.slice(6, 8) ? `${dates.endDate.slice(6, 8)}.` : ''} / ${calculateDateDiff(dates.startDate, dates.endDate)}박 ${calculateDateDiff(dates.startDate, dates.endDate) + 1}일`
                  : '날짜를 선택해주세요.'}
              </Typography.Title>
            </S.BottomButton>
          </BottomButtonContainer>
        </S.Footer>
      }
      header={
        <S.HeadingWrapper>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <XIcon />
          </div>
          <Heading size="sm">여행 날짜를 선택해주세요.</Heading>
        </S.HeadingWrapper>
      }
    >
      <FutureCalendar />
    </PageTemplate>
  );
}

export default PlaceMyTripCreate;
