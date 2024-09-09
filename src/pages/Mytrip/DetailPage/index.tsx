import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { get } from '@_utils/api';
import { parseDateString, DateObject } from '@_utils/calendar';

import OptionIcon from '../../../assets/icons/menu_kebab.svg?react';

import PageTemplate from '../../../components/common/PageTemplate';
import TripPlanList, { DayPlan } from '../../../components/tripDetail/TripPlanList';
import PlanMap from '../../../components/tripDetail/PlanMap';
import EditModeBottomControlBox from '../../../components/tripDetail/EditModeBottomControlBox';
import Typography from '../../../components/common/Typography';
import CalendarIcon from '../../../assets/icons/calendar.svg?react';
import { SortableDayPlan, editingTripPlanState, tripState } from '../../../recoil/tripState';
import PlanEditMode from '../../../components/tripDetail/PlanEditMode';
import BackButton from '../../../components/common/BackButton';

import * as S from './style';
import useMyTripModal from '../../../hooks/useMyTripModal';

export const markerColors = [
  '#5276FA',
  '#FFAF37',
  '#BA75FF',
  '#FA5252',
  '#30A9DE',
  '#F29661',
  '#78CBA2',
];

export interface TripData {
  id: number;
  title: string;
  departureDate: string;
  arrivalDate: string;
  days: number;
  location: string[];
  plan: DayPlan[];
}

function MyTripDetailPage() {
  const { id } = useParams(); // 파라미터에 게시글 ID
  const nickname = useLoaderData() as string;

  const [data, setData] = useRecoilState(tripState);
  const resetData = useResetRecoilState(tripState);
  const [tempData, setTempData] = useRecoilState(editingTripPlanState);

  const { MyTripModal, modalOpen } = useMyTripModal({
    id: Number(id),
    title: data.title,
    departureDate: data.departureDate,
    arrivalDate: data.arrivalDate,
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [dayFilter, setDayFilter] = useState<number>(0); // 0: 전체보기
  const [duration, setDuration] = useState<{
    departure: DateObject;
    arrival: DateObject;
  }>({
    departure: {
      year: -1,
      month: -1,
      day: -1,
      dayOfWeek: '월',
      dateString: '',
    },
    arrival: {
      year: -1,
      month: -1,
      day: -1,
      dayOfWeek: '월',
      dateString: '',
    },
  });

  // 여행 일정 데이터 불러오기
  const getData = async (id: number) => {
    const { data: responseData } = await get<TripData>(`/my-travel/${id}`);

    setData(responseData);
    setDuration({
      departure: parseDateString(responseData.departureDate) as DateObject,
      arrival: parseDateString(responseData.arrivalDate) as DateObject,
    });
  };

  // 날짜 객체에서 여행 기간 "yyyy. m. d. ~ yyyy. m. d. / n박 m일"로 변환된 텍스트
  const getDurationString = (departure: DateObject, arrival: DateObject): string => {
    let dateString = '';
    let durationString = '';

    const getDateDiff = () => {
      const date1 = new Date(departure.dateString);
      const date2 = new Date(arrival.dateString);

      const diffDate = date1.getTime() - date2.getTime();

      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    };

    const diffDate = getDateDiff();
    durationString = diffDate === 0 ? '당일치기' : `${diffDate}박 ${diffDate + 1}일`;

    if (departure.dateString === arrival.dateString) {
      // 1. 출발-도착 날짜가 동일할 경우 YYYY. MM. DD / 당일치기
      dateString = `${departure.year}. ${departure.month}. ${departure.day}`;
    } else if (departure.year !== arrival.year) {
      // 2. 출발-도착 연도가 동일하지 않을 경우 YYYY. MM. DD ~ YYYY. MM. DD
      dateString = `${departure.year}. ${departure.month}. ${departure.day} ~ ${arrival.year}. ${arrival.month}. ${arrival.day} `;
    } else {
      // 3. 출발-도착 연도가 동일할 경우 YYYY. MM. DD ~ MM. DD
      dateString = `${departure.year}. ${departure.month}. ${departure.day} ~ ${arrival.month}. ${arrival.day} `;
    }

    return `${dateString} / ${durationString}`;
  };

  // 여행 일정 데이터 중 여행 장소가 있는지 확인
  const hasRouteData = (data: TripData): boolean =>
    data.plan.some((dayPlan) => dayPlan.route.length > 0);

  useEffect(() => {
    resetData();
    getData(Number(id));
  }, []);

  useEffect(() => {
    const newDayPlanArray: SortableDayPlan[] = [];

    data.plan.forEach((dayPlan) => {
      const sortableRoute = dayPlan.route.map((place) => ({
        ...place,
        chosen: false,
        selected: false,
        id: `${place.detailRouteId}`,
      }));

      newDayPlanArray.push({ ...dayPlan, route: sortableRoute });
    });

    setTempData(newDayPlanArray);
  }, [data, isEditMode]);

  return (
    <PageTemplate
      nav={isEditMode ? <EditModeBottomControlBox /> : 'default'}
      header={
        <S.Header>
          <S.NavigationHeader>
            <BackButton />
            <OptionIcon
              onClick={() => {
                modalOpen();
              }}
            />
          </S.NavigationHeader>
          <Typography.Headline size="md">{data.title}</Typography.Headline>
          <S.DateParagraph>
            <CalendarIcon />
            <Typography.Title size="md" color="#a6a6a6">
              {getDurationString(duration.departure, duration.arrival)}
            </Typography.Title>
          </S.DateParagraph>
        </S.Header>
      }
    >
      <MyTripModal />
      {hasRouteData(data) ? (
        <PlanMap
          isEditMode={isEditMode}
          data={isEditMode ? tempData : data.plan}
          dayFilter={dayFilter}
        />
      ) : (
        <S.MessageBox>
          <Typography.Body size="md" color="#5276FA">
            <p>
              {nickname}
              님, 새로운 여행 일정이 만들어졌어요!
            </p>
            <p>아래 장소 추가 버튼을 통해 계획을 세워가보세요. 🙂</p>
          </Typography.Body>
        </S.MessageBox>
      )}
      {isEditMode ? (
        <PlanEditMode setIsEditMode={setIsEditMode} />
      ) : (
        <TripPlanList
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          dayFilter={dayFilter}
          setDayFilter={setDayFilter}
        />
      )}
    </PageTemplate>
  );
}

export default MyTripDetailPage;
