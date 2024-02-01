import { Place } from "../../assets/data/tripPlanData";
import TripPlanPlaceItem from "./TripPlanPlaceItem";
import AddPlaceButton from "./AddPlaceButton";
import * as S from "../../styles/tripDetail/DayPlan.style";

interface Props {
  day: number;
  date: Date;
  route: Place[];
}
function DayPlan({ day, date, route }: Props) {
  const dateToString = (date: Date) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return `${date.getUTCMonth() + 1}.${date.getUTCDate()}/${
      days[date.getUTCDay()]
    }`;
  };

  return (
    <S.Container>
      <S.DayInfo>
        <div>
          Day {day}
          <span>{dateToString(date)}</span>
        </div>
        <S.EditButton>편집</S.EditButton>
      </S.DayInfo>
      <S.PlaceList>
        {route.length === 0 ? (
          <AddPlaceButton />
        ) : (
          <>
            {route.map((place, index) => (
              <TripPlanPlaceItem
                place={place}
                index={index}
                addPlaceButton={index === route.length - 1 && true}
              />
            ))}
          </>
        )}
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlan;
