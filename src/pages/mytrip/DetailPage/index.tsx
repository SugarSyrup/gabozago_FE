import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import PageTemplate from "../../../components/common/PageTemplate";
import TripInfo from "../../../components/tripDetail/TripInfo";
import TripPlanListPlaceHolder from "../../../components/tripDetail/TripPlanListPlaceHolder";
import TripPlanList from "../../../components/tripDetail/TripPlanList";
import PlanMap from "../../../components/tripDetail/PlanMap";
import EditModeBottomControlBox from "../../../components/tripDetail/EditModeBottomControlBox";

import { tripPlanState } from "../../../recoil/tripState";
import { planViewModeState } from "../../../recoil/planViewModeState";
import { useLoaderData, useParams } from "react-router-dom";
import Typography from "../../../components/common/Typography";
import { get } from "../../../utils/api";

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
  // @todo: id를 통해 일정 데이터 비동기 요청 불러와 State로 관리하기
  const { id } = useParams(); // 파라미터에 게시글 ID
  const nickname = useLoaderData() as string;
  const [viewMode, setViewMode] = useRecoilState(planViewModeState);
  const tripPlan = useRecoilValue(tripPlanState);
  const [data, setData] = useState<TripData | null>(null);

  const getData = async (id: number) => {
    const { data } = await get<TripData>(`/my-travel/${id}`);
    console.dir(data);
    setData(data);
  };

  useEffect(() => {
    getData(Number(id));
    setViewMode("NOPLAN");
  }, [tripPlan]);

  return (
    <PageTemplate
      nav={viewMode === "EDIT" ? <EditModeBottomControlBox /> : "default"}
    >
      <TripInfo />
      {viewMode === "NOPLAN" ? (
        <>
          <S.MessageBox>
            <Typography.Body size="md" color="#5276FA">
              <p>{nickname}님, 새로운 여행 일정이 만들어졌어요!</p>
              <p>아래 장소 추가 버튼을 통해 계획을 세워가보세요. 🙂</p>
            </Typography.Body>
          </S.MessageBox>
          <TripPlanListPlaceHolder days={4} />
        </>
      ) : (
        <>
          <PlanMap />
          <TripPlanList />
        </>
      )}
    </PageTemplate>
  );
}

export default MyTripDetailPage;
