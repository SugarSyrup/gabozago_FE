import * as S from "../../styles/tripDetail/DayPlanEdit.style";
import { Place } from "../../assets/data/tripPlanData";
import EditablePlaceItem from "./EditablePlaceItem";

interface Props {
  day: number;
  date: Date;
  route: Place[];
}
function DayPlanEdit({ day, route }: Props) {
  return (
    <S.Container>
      <S.DaySpan>Day {day}</S.DaySpan>
      <S.PlaceList>
        {route.map((place, index) => (
          <EditablePlaceItem place={place} index={index} />
        ))}
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlanEdit;
