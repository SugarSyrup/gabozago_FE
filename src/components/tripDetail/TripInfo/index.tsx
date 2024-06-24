import { useRecoilValue } from 'recoil';
import * as S from './style';
import Heading from '../../common/Heading';
import EditIcon from '../../../assets/icons/edit.svg?react';
import CalendarIcon from '../../../assets/icons/calendar.svg?react';
import BusIcon from '../../../assets/icons/bus.svg?react';
import { tripInfoSizeState } from '../../../recoil/planViewModeState';
import { tripInfoState } from '../../../recoil/tripState';

export type Size = 'default' | 'sm' | 'xs';
function TripInfo() {
  const tripInfo = useRecoilValue(tripInfoState);
  const size = useRecoilValue(tripInfoSizeState);
  /** Heading 컴포넌트 Prop으로 전달할 size */
  enum headingSize {
    'default' = 'lg', // 24px
    'sm' = 'md', // 20px
    'xs' = 'sm', // 16px
  }
  /** "[출발일] - [도착일]"을 YY.MM.DD 혹은 MM.DD 형식으로 출력 */
  const getTripDuration = (departure: Date, arrival: Date) => {
    const dateToString = (date: Date, format: 'YY.MM.DD' | 'MM.DD' = 'YY.MM.DD') => {
      const str = date.toLocaleDateString('ko-KR');
      if (format === 'MM.DD') {
        return str.slice(6);
      }
      return str.slice(2);
    };
    const isDprtArrSameYear = departure.getFullYear === arrival.getFullYear;

    let duration = [];

    if (isDprtArrSameYear) {
      // 같은 해이면 "MM.DD"
      duration = [dateToString(departure, 'MM.DD'), dateToString(arrival, 'MM.DD')];
    } else {
      // 다른 해이면 "MM.DD"
      duration = [dateToString(departure, 'YY.MM.DD'), dateToString(arrival, 'YY.MM.DD')];
    }

    return `${duration[0]} - ${duration[1]}`;
  };

  return (
    <S.Container size={size}>
      <Heading size={headingSize[size]}>{tripInfo.title}</Heading>
      {size !== 'xs' && (
        <S.EditButton onClick={() => {}}>
          편집
          <EditIcon />
        </S.EditButton>
      )}
      <S.DetailList size={size}>
        <S.DetailItem size={size}>
          {size !== 'xs' && (
            <span>
              <CalendarIcon />
              <span>여행일자</span>
            </span>
          )}
          <span>
            {getTripDuration(tripInfo.departureDate, tripInfo.arrivalDate)} / {tripInfo.days - 1}박
            {tripInfo.days}일
          </span>
        </S.DetailItem>
        {size !== 'xs' && (
          <S.DetailItem size={size}>
            <span>
              <BusIcon />
              <span>이동수단</span>
            </span>
            <span>{tripInfo.transport}</span>
          </S.DetailItem>
        )}
      </S.DetailList>
    </S.Container>
  );
}

export default TripInfo;
