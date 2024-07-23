import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { get } from '../../../utils/api';

import PageTemplate from '../../../components/common/PageTemplate';
import MyScheduleCard from '../../../components/mytrip/MyScheduleCard';
import Typography from '../../../components/common/Typography';

import CirclePlusIcon from '../../../assets/icons/plus_circle.svg?react';
import RightChevronIcon from '../../../assets/icons/chevron_right.svg?react';
import CalendarAddIcon from '../../../assets/icons/calendar_add.svg?react';

import * as S from './style';
import MyLastScheduleCard from '../../../components/mytrip/MyLastScheduleCard';
import { datesState } from '../../../recoil/mytrip/createData';
import { createTravelState } from '../../../recoil/mytrip/createTravelState';

type TravelResponseType = {
  next: null | '';
  previous: null | '';
  results: {
    id: number;
    title: string;
    departure_date: string;
    arrival_date: string;
    regions: string[];
    thumbnailURL: string;
  }[];
};

function MyTripPage() {
  const navigate = useNavigate();
  const setDatesState = useSetRecoilState(datesState);
  const setCreateTravelState = useSetRecoilState(createTravelState);
  const [next, setNext] = useState<TravelResponseType['next']>('');
  const [tripHistory, setTripHistory] = useState<TravelResponseType['results']>([]);
  const [tripUpComing, setTripUpComing] = useState<TravelResponseType['results']>([]);
  const [nickname, setNickname] = useState<string>('');
  const infiniteObserverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    get<TravelResponseType>('/my-travel/upcoming').then((response) => {
      setNext(response.data.next);
      setTripUpComing(response.data.results);
    });

    get<TravelResponseType['results']>('/my-travel/past').then((response) => {
      setTripHistory(response.data);
    });

    get<{ nickname: string }>('/user/profile').then((response) => {
      setNickname(response.data.nickname);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && next) {
        get<TravelResponseType>(next).then((response) => {
          setNext(response.data.next);
          setTripUpComing([...tripUpComing, ...response.data.results]);
        });
      }
    });

    if (infiniteObserverRef.current) {
      observer.observe(infiniteObserverRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PageTemplate>
      <S.UpCommingContainer>
        {tripUpComing.length === 0 ? (
          <S.HeadingContainer>
            <Typography.Headline size="md">{nickname} 님</Typography.Headline>
            {tripHistory.length !== 0 ? (
              <Typography.Title size="lg">
                <S.TextHighlight>가보자고</S.TextHighlight>와 첫 여행 일정을 세워보세요!
              </Typography.Title>
            ) : (
              <Typography.Title size="lg">아직 여행 일정이 없어요!</Typography.Title>
            )}
          </S.HeadingContainer>
        ) : (
          <S.HeadingContainer>
            <Typography.Headline size="md">{nickname} 님</Typography.Headline>
            <Typography.Title size="lg">
              다가오는 여행이 <S.TextHighlight>{tripUpComing.length}개</S.TextHighlight>개 있어요!
            </Typography.Title>
          </S.HeadingContainer>
        )}

        {tripUpComing.length === 0 ? (
          <S.CreateMyTripButton>
            <S.CreateMyTripTextWrapper>
              <Typography.Title size="lg">
                <S.TextHighlight>여행 일정을 생성</S.TextHighlight> 하여
              </Typography.Title>
              <Typography.Title size="lg">여행 계획을 세워보세요!</Typography.Title>
            </S.CreateMyTripTextWrapper>

            <CalendarAddIcon />
          </S.CreateMyTripButton>
        ) : (
          <S.ScheduleCardContainer>
            {tripUpComing.map((tripData) => (
              <MyScheduleCard {...tripData} key={tripData.id} />
            ))}
            <div ref={infiniteObserverRef} />
          </S.ScheduleCardContainer>
        )}

        <S.CreateMyTripTextButton
          onClick={() => {
            navigate('/mytrip/create');
            setCreateTravelState('create');
            setDatesState({ startDate: '', endDate: '' });
          }}
          hasTripUpcoming={tripUpComing.length !== 0}
        >
          <CirclePlusIcon />
          <Typography.Title size="lg" color="inherit">
            새로운 여행 일정 만들기
          </Typography.Title>
        </S.CreateMyTripTextButton>
      </S.UpCommingContainer>

      {tripHistory.length !== 0 && (
        <>
          <S.ContentHeadingWrappper>
            <Typography.Headline size="sm">지난 여행 기록</Typography.Headline>
            <S.ShowAllTrips to="/mytrip/all">
              <Typography.Body size="lg" color="#424242">
                전체보기
              </Typography.Body>
              <RightChevronIcon />
            </S.ShowAllTrips>
          </S.ContentHeadingWrappper>
          <S.ContentContainer>
            {tripHistory.map((trip) => (
              <MyLastScheduleCard {...trip} key={trip.id} />
            ))}
          </S.ContentContainer>
        </>
      )}
    </PageTemplate>
  );
}

export default MyTripPage;
