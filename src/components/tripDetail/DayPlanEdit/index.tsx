import * as S from "./style";
import { useEffect, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { DayPlan, Place } from "../../../assets/data/tripPlanData";
import EditablePlaceItem from "../EditablePlaceItem";

interface Props {
  day: number;
  route: Place[];
  setPlan: SetterOrUpdater<DayPlan[]>;
}
type SortableRoute = ItemInterface & Place;
function DayPlanEdit({ day, route: routeProp, setPlan }: Props) {
  const [route, setRoute] = useState<SortableRoute[]>([]);

  useEffect(() => {
    setRoute(
      routeProp.map((place) => ({ ...place, chosen: false, id: place.placeId }))
    );
  }, [routeProp]);

  return (
    <S.Container>
      <S.DaySpan>Day {day}</S.DaySpan>
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
