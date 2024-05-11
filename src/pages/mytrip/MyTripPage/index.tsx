import { useEffect, useState } from "react";

import { get } from "../../../utils/api";

import PageTemplate from "../../../components/common/PageTemplate";
import MyScheduleCard from "../../../components/mytrip/MyScheduleCard";
import Typography from "../../../components/common/Typography";

import CirclePlusIcon from "../../../assets/icons/plus_circle.svg?react";
import RightChevronIcon from "../../../assets/icons/chevron_right.svg?react";
import CalendarAddIcon from "../../../assets/icons/calendar_add.svg?react";

import * as S from "./style";
import MyLastScheduleCard from "../../../components/mytrip/MyLastScheduleCard";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { datesState } from "../../../recoil/mytrip/createData";

type travelResponseType = {
  "id": number,
  "title": string,
  "departure_date": string
  "arrival_date": string,
  "regions": string[]
}[]

function MyTripPage() {
  const navigate = useNavigate();
  const setDatesState = useSetRecoilState(datesState);
  const [tripHistory, setTripHistory] = useState<travelResponseType>([]);
  const [tripUpComing, setTripUpComing] = useState<travelResponseType>([]);

  useEffect(() => {
    get<travelResponseType>(`${import.meta.env.VITE_BASE_URL}my-travel/upcoming`)
      .then((response) => {
        setTripHistory(response.data);
      })

    get<travelResponseType>(`${import.meta.env.VITE_BASE_URL}my-travel/past`)
      .then((response) => {
        setTripUpComing(response.data);
      })
  }, []);

  return (
    <PageTemplate>
      {
        tripUpComing.length === 0 ? 
        (
          <S.NoUpCommingContainer>
            <S.HeadingContainer>
              <Typography.Headline size="md">최민석 님</Typography.Headline>
              <Typography.Title size="lg"><S.TextHighlight>가보자고</S.TextHighlight>와 첫 여행 일정을 세워보세요!</Typography.Title>
            </S.HeadingContainer>

            <S.CreateMyTripButton>
              <S.CreateMyTripTextWrapper>
                <Typography.Title size="lg">
                  <S.TextHighlight>여행 일정을 생성</S.TextHighlight> 하여
                </Typography.Title>
                <Typography.Title size="lg">
                  여행 계획을 세워보세요!
                </Typography.Title>
              </S.CreateMyTripTextWrapper>

              <CalendarAddIcon />
            </S.CreateMyTripButton>

            <S.CreateMyTripTextButton onClick={() => {navigate('/mytrip/create')}} hasTripHistory={false}>
              <CirclePlusIcon />
              <Typography.Title size="md" color="white">새로운 여행 일정 만들기</Typography.Title>
            </S.CreateMyTripTextButton>
          </S.NoUpCommingContainer>
        )
        :
        (
          <S.ContainerWithPlan>
            <S.HeadingContainer>
              <Typography.Headline size="md">최민석 님</Typography.Headline>
              <Typography.Title size="lg">다가오는 여행이 있어요!</Typography.Title>
            </S.HeadingContainer>

            <S.ScheduleCardContainer>
              {
                tripUpComing.map((tripData) => <MyScheduleCard {...tripData}/>)
              }
              
            </S.ScheduleCardContainer>

            <S.CreateMyTripTextButton onClick={() => {navigate('/mytrip/create')}} hasTripHistory={true}>
              <CirclePlusIcon />
              <Typography.Title size="md" color="#484848">새로운 여행 일정 만들기</Typography.Title>
            </S.CreateMyTripTextButton>
          </S.ContainerWithPlan>
        )
      }
      
      {
        tripHistory.length === 0 && 
        <>
          <S.ContentHeadingWrappper>
            <Typography.Headline size="sm">지난 여행 기록</Typography.Headline>
            <S.ShowAllTrips to="/mytrip/all">
              <Typography.Body size="lg" color="#424242">전체보기</Typography.Body>
              <RightChevronIcon />
            </S.ShowAllTrips>
          </S.ContentHeadingWrappper>
          <S.ContentContainer>
            {
              tripHistory.map((trip) => <MyLastScheduleCard {...trip} />)
            }
          </S.ContentContainer>
        </>
      }
    </PageTemplate>
  );
}

export default MyTripPage;
