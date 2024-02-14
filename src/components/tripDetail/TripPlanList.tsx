import * as S from "../../styles/tripDetail/TripPlanList.style";
import DayPlan from "./DayPlan";
import DayPlanEdit from "./DayPlanEdit";
import { useRecoilState, useRecoilValue } from "recoil";
import { planViewModeState } from "../../recoil/planViewModeState";
import { tripPlanState } from "../../recoil/tripPlanState";

function TripPlanList() {
  const [viewMode, setViewMode] = useRecoilState(planViewModeState);
  const plan = useRecoilValue(tripPlanState);

  return (
    <S.Container>
      <S.DayFilterButton onClick={() => {}}>전체 일정</S.DayFilterButton>
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
              <DayPlan
                day={dayPlan.day}
                date={dayPlan.date}
                route={dayPlan.route}
              />
            ))
          : plan?.map((dayPlan) => (
              <DayPlanEdit
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
