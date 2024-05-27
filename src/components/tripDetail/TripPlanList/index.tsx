import * as S from "./style";
import DayPlan from "../DayPlan";
import DayPlanEdit from "../DayPlanEdit";
import ArrowBottomIcon from "../../../assets/icons/arrow_bottom.svg?react";
import { TripData } from "../../../pages/mytrip/DetailPage";
import { PlaceData } from "../TripPlanPlaceItem";

export interface DayPlan {
  day: number;
  date: string;
  dayOfWeek: "일" | "월" | "화" | "수" | "목" | "금" | "토";
  route: PlaceData[];
}

interface Props {
  data: TripData;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function TripPlanList({ data, isEditMode, setIsEditMode }: Props) {
  return (
    <S.Container>
      {data.plan.length >= 0 && (
        <S.DayFilterButton onClick={() => {}}>
          전체 일정
          <ArrowBottomIcon />
        </S.DayFilterButton>
      )}
      <S.PlaceListContainer>
        {isEditMode && (
          <S.EditComplateButton
            onClick={() => {
              setIsEditMode(false);
            }}
          >
            완료
          </S.EditComplateButton>
        )}
        {isEditMode
          ? data.plan.map((dayPlan) => (
              <DayPlanEdit
                day={dayPlan.day}
                date={dayPlan.date}
                route={dayPlan.route}
              />
            ))
          : data.plan.map((dayPlan) => (
              <DayPlan
                day={dayPlan.day}
                date={dayPlan.date}
                data={dayPlan.route}
                setIsEditMode={setIsEditMode}
              />
            ))}
      </S.PlaceListContainer>
    </S.Container>
  );
}

export default TripPlanList;
