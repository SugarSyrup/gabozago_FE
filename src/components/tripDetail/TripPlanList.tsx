import * as S from "../../styles/tripDetail/TripPlanList.style";
import { DayPlan as DayPlanType } from "../../assets/data/tripPlanData";
import DayPlan from "./DayPlan";
import { useRecoilState } from "recoil";
import { planViewModeState } from "../../recoil/planViewModeState";

interface Props {
  plan?: DayPlanType[];
  days?: number;
}
function TripPlanList({ days, plan = [] }: Props) {
  const [viewMode, setViewMode] = useRecoilState(planViewModeState);

  return (
    <S.Container>
      <S.DayFilterButton onClick={() => {}}>전체 일정</S.DayFilterButton>
      <S.PlaceListContainer>
        {viewMode === "PLAN" ? (
          plan.map((dayPlan) => (
            <DayPlan
              day={dayPlan.day}
              date={dayPlan.date}
              route={dayPlan.route}
            />
          ))
        ) : (
          <>
            <S.EditComplateButton
              onClick={() => {
                setViewMode("PLAN");
              }}
            >
              완료
            </S.EditComplateButton>
          </>
        )}
      </S.PlaceListContainer>
    </S.Container>
  );
}

export default TripPlanList;
