import * as S from "../../styles/tripDetail/TripPlanList.style";
import DayPlan from "./DayPlan";
import DayPlanEdit from "./DayPlanEdit";
import { useRecoilState } from "recoil";
import { planViewModeState } from "../../recoil/planViewModeState";
import { tripPlanState } from "../../recoil/tripState";
import ArrowBottomIcon from "../../assets/icons/arrow_bottom.svg?react";

function TripPlanList() {
  const [viewMode, setViewMode] = useRecoilState(planViewModeState);
  const [plan, setPlan] = useRecoilState(tripPlanState);

  return (
    <S.Container>
      <S.DayFilterButton onClick={() => {}}>
        전체 일정
        <ArrowBottomIcon />
      </S.DayFilterButton>
      <S.PlaceListContainer>
        {viewMode === "EDIT" && (
          <S.EditComplateButton
            onClick={() => {
              setViewMode("PLAN");
            }}
          >
            완료
          </S.EditComplateButton>
        )}
        {viewMode === "EDIT"
          ? plan?.map((dayPlan) => (
              <DayPlanEdit
                day={dayPlan.day}
                route={dayPlan.route}
                setPlan={setPlan}
              />
            ))
          : plan?.map((dayPlan) => (
              <DayPlan
                day={dayPlan.day}
                date={dayPlan.date}
                route={dayPlan.route}
              />
            ))}
      </S.PlaceListContainer>
    </S.Container>
  );
}

export default TripPlanList;
