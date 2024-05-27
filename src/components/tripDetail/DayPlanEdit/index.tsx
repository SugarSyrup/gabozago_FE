import * as S from "./style";
import { useEffect, useState } from "react";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import EditablePlaceItem from "../EditablePlaceItem";
import { PlaceData } from "../TripPlanPlaceItem";
import { parseDateString } from "../../../utils/parseDateString";
import { DayPlan } from "../TripPlanList";

interface Props {
  day: number;
  date: string;
  route: PlaceData[];
  setTempData: React.Dispatch<React.SetStateAction<DayPlan[]>>;
}

export type SortableRoute = ItemInterface & PlaceData;

function DayPlanEdit({
  day,
  date: dateString,
  route: planRoute,
  setTempData,
}: Props) {
  const date = parseDateString(dateString);
  const [route, setRoute] = useState<SortableRoute[]>([]);

  useEffect(() => {
    setRoute(
      planRoute.map((place) => ({ ...place, chosen: false, id: place.placeId }))
    );
  }, []);

  useEffect(() => {
    if (planRoute !== route) {
      setTempData((prev) => {
        const temp = [...prev];
        temp[day - 1] = {
          ...temp[day - 1],
          route: [...route],
        };
        return temp;
      });
    }
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
            <EditablePlaceItem
              key={item.id}
              day={day}
              place={item}
              index={index}
              setRoute={setRoute}
            />
          ))}
        </ReactSortable>
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlanEdit;
