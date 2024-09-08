import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import CalendarAddIcon from '@_icons/calendar_add.svg?react';
import XIcon from '@_icons/grayx.svg?react';

import Heading from '@_common/Heading';
import Typography from '@_common/Typography';
import PageTemplate from '@_common/PageTemplate';
import PastNFutureCalendar from '@_common/Calendar/PastNFutureCalendar';
import BottomButtonContainer from '@_common/BottomButtonContainer';

import { datesState, selectedLocationsState } from '@_recoil/mytrip/createData';
import { calculateDateDiff } from '@_utils/calendar';

import * as S from './style';
import { patch } from '@_utils/api';

function MyTripDatesModifyPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dates = useRecoilValue(datesState);
  const setSelectedLocation = useSetRecoilState(selectedLocationsState);
  return (
    <PageTemplate
      nav={
        <S.Footer>
          <BottomButtonContainer
            bgColor={dates.startDate !== '' && dates.endDate !== '' ? 'blue' : 'gray'}
            onClick={() => {
              setSelectedLocation([]);

              if (dates.startDate !== '' && dates.endDate !== '') {
                patch('/my-travel', {
                  id,
                  departureDate: `${dates.startDate.slice(0, 4)}-${dates.startDate.slice(4, 6)}-${dates.startDate.slice(6, 8)}`,
                  arrivalDate: `${dates.endDate.slice(0, 4)}-${dates.endDate.slice(4, 6)}-${dates.endDate.slice(6, 8)}`,
                }).then(() => {
                  navigate(-1);
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
      <PastNFutureCalendar />
    </PageTemplate>
  );
}

export default MyTripDatesModifyPage;
