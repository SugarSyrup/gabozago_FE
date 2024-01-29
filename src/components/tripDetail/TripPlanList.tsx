import * as S from "../../styles/tripDetail/TripPlanList.style";
import { DayPlan as DayPlanType } from "../../assets/data/tripPlanData";
import DayPlan from "./DayPlan";

interface Props {
  plan?: DayPlanType[];
  days?: number;
}
function TripPlanList({ days, plan = [] }: Props) {
  return (
    <S.Container>
      <S.DayFilterButton onClick={() => {}}>전체 일정</S.DayFilterButton>
      <S.PlaceListContainer>
        {plan.map((dayPlan) => (
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
