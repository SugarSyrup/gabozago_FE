import * as S from "./style";
import DayPlan from "../DayPlan";
import ArrowBottomIcon from "../../../assets/icons/arrow_bottom.svg?react";
import { PlaceData } from "../TripPlanPlaceItem";
import PlanEditMode from "../PlanEditMode";
import { useRecoilValue } from "recoil";
import { tripState } from "../../../recoil/tripState";

export interface DayPlan {
  day: number;
  date: string;
  dayOfWeek: "일" | "월" | "화" | "수" | "목" | "금" | "토";
  route: PlaceData[];
}

interface Props {
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function TripPlanList({ isEditMode, setIsEditMode }: Props) {
  const data = useRecoilValue(tripState);

  return (
    <S.Container>
      {data.plan.length >= 0 && (
        <S.DayFilterButton onClick={() => {}}>
          전체 일정
          <ArrowBottomIcon />
        </S.DayFilterButton>
      )}
      <S.PlaceListContainer>
        {isEditMode ? (
          <PlanEditMode setIsEditMode={setIsEditMode} />
        ) : (
          data.plan.map((dayPlan) => (
            <DayPlan
              day={dayPlan.day}
              date={dayPlan.date}
              data={dayPlan.route}
              setIsEditMode={setIsEditMode}
            />
          ))
        )}
      </S.PlaceListContainer>
    </S.Container>
  );
}

export default TripPlanList;
