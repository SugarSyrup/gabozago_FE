import * as S from "./style";
import { useEffect, useState } from "react";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import EditablePlaceItem from "../EditablePlaceItem";
import { PlaceData } from "../TripPlanPlaceItem";
import { parseDateString } from "../../../utils/parseDateString";

interface Props {
  day: number;
  date: string;
  route: PlaceData[];
}
type SortableRoute = ItemInterface & PlaceData;
function DayPlanEdit({ day, date: dateString, route: routeProp }: Props) {
  const date = parseDateString(dateString);
  const [route, setRoute] = useState<SortableRoute[]>([]);

  useEffect(() => {
    setRoute(
      routeProp.map((place) => ({ ...place, chosen: false, id: place.placeId }))
    );
  }, []);
  useEffect(() => {
    console.dir(route);
  }, [route]);

  return (
    <S.Container>
      <S.DayParagraph>
        Day {day}
        <span>{`${date?.month}. ${date?.day}(${date?.dayOfWeek})`}</span>
      </S.DayParagraph>
      <S.PlaceList>
        <ReactSortable
          group={"dayPlan"}
          list={route}
          setList={setRoute}
          animation={150}
          handle=".handle"
        >
          {route.map((item, index) => (
            <EditablePlaceItem key={item.id} place={item} index={index} />
          ))}
        </ReactSortable>
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlanEdit;
