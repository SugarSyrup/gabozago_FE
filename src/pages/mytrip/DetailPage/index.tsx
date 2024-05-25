import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useLoaderData, useParams } from "react-router-dom";

import { get } from "../../../utils/api";
import { parseDateString, DateObject } from "../../../utils/parseDateString";
import { tripPlanState } from "../../../recoil/tripState";
import { planViewModeState } from "../../../recoil/planViewModeState";

import PageTemplate from "../../../components/common/PageTemplate";
import TripPlanList from "../../../components/tripDetail/TripPlanList";
import PlanMap from "../../../components/tripDetail/PlanMap";
import EditModeBottomControlBox from "../../../components/tripDetail/EditModeBottomControlBox";
import Typography from "../../../components/common/Typography";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";

interface PlaceData {
  detailRouteId: number;
  placeName: string;
  placeTheme: string;
  placeId: number;
  googlePlaceId: string;
  placeImage: string;
  latitude: number;
  longitude: number;
  memo: string;
}

interface DayPlan {
  day: number;
  date: string;
  dayOfWeek: "일" | "월" | "화" | "수" | "목" | "금" | "토";
  route: PlaceData[];
}

interface TripData {
  id: number;
  title: string;
  departure_date: string;
  arrival_date: string;
  days: number;
  location: string[];
  plan: DayPlan[];
}

function MyTripDetailPage() {
  const { id } = useParams(); // 파라미터에 게시글 ID
  const nickname = useLoaderData() as string;

  const [viewMode, setViewMode] = useRecoilState(planViewModeState);
  const tripPlan = useRecoilValue(tripPlanState);

  const [data, setData] = useState<TripData>({
    id: -1,
    title: "",
    departure_date: "",
    arrival_date: "",
    days: -1,
    location: [],
    plan: [],
  });
  const [duration, setDuration] = useState<{
    departure: DateObject;
    arrival: DateObject;
  }>({
    departure: {
      year: -1,
      month: -1,
      day: -1,
      dayOfWeek: "월",
      dateString: "",
    },
    arrival: {
      year: -1,
      month: -1,
      day: -1,
      dayOfWeek: "월",
      dateString: "",
    },
  });

  const getData = async (id: number) => {
    const { data } = await get<TripData>(`/my-travel/${id}`);
    console.dir(data);
    setData(data);
    setDuration({
      departure: parseDateString(data.departure_date) as DateObject,
      arrival: parseDateString(data.arrival_date) as DateObject,
    });
  };

  const getDurationString = (departure: DateObject, arrival: DateObject) => {
    let dateString = "";
    let durationString = "";

    const getDateDiff = () => {
      const date1 = new Date(departure.dateString);
      const date2 = new Date(arrival.dateString);

      const diffDate = date1.getTime() - date2.getTime();

      return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    };

    const diffDate = getDateDiff();
    durationString =
      diffDate === 0 ? "당일치기" : `${diffDate}박 ${diffDate + 1}일`;

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

  useEffect(() => {
    getData(Number(id));
    setViewMode("NOPLAN");
  }, []);

  return (
    <PageTemplate
      nav={viewMode === "EDIT" ? <EditModeBottomControlBox /> : "default"}
      header={
        <S.Header>
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
      {false ? (
        // {data.plan.length > 0 ? (
        <PlanMap />
      ) : (
        <S.MessageBox>
          <Typography.Body size="md" color="#5276FA">
            <p>{nickname}님, 새로운 여행 일정이 만들어졌어요!</p>
            <p>아래 장소 추가 버튼을 통해 계획을 세워가보세요. 🙂</p>
          </Typography.Body>
        </S.MessageBox>
      )}
      <TripPlanList />
    </PageTemplate>
  );
}

export default MyTripDetailPage;
