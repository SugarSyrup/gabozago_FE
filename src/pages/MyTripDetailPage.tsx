import { useEffect } from "react";
// import { useParams } from "react-router-dom";

import PageTemplate from "../components/common/PageTemplate";
import TripInfo from "../components/tripDetail/TripInfo";
import TripPlanListPlaceHolder from "../components/tripDetail/TripPlanListPlaceHolder";
import TripPlanList from "../components/tripDetail/TripPlanList";
import PlanMap from "../components/tripDetail/PlanMap";

import ClapBlueIcon from "../assets/icons/clap_blue.svg?react";
import * as S from "../styles/MyTripDetailPage.style";
import { planViewModeState } from "../recoil/planViewModeState";
import { useRecoilState, useRecoilValue } from "recoil";
import { tripPlanState } from "../recoil/tripState";
import EditModeBottomControlBox from "../components/tripDetail/EditModeBottomControlBox";

function MyTripDetailPage() {
  // @todo: id를 통해 일정 데이터 비동기 요청 불러와 State로 관리하기
  // const { id } = useParams(); // 파라미터에 게시글 ID
  const [viewMode, setViewMode] = useRecoilState(planViewModeState);
  const tripPlan = useRecoilValue(tripPlanState);

  // @todo: 사용자 정보 state로 관리
  const username = "최민석";

  useEffect(() => {
    console.log(tripPlan);
    if (tripPlan?.length !== 0) {
      setViewMode("PLAN");
    } else {
      setViewMode("NOPLAN");
    }
  }, [tripPlan]);

  return (
    <PageTemplate
      nav={viewMode === "EDIT" ? <EditModeBottomControlBox /> : true}
    >
      <TripInfo />
      {viewMode === "NOPLAN" ? (
        <>
          <S.MessageBox>
            <p>
              {username}님, 새로운 여행 일정이 만들어졌어요!
              <ClapBlueIcon />
            </p>
            <p>아래에 장소를 추가해 계획을 완성해보세요:)</p>
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
