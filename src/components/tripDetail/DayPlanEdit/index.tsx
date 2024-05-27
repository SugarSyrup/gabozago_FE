import * as S from "./style";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import EditablePlaceItem from "../EditablePlaceItem";
import { PlaceData } from "../TripPlanPlaceItem";
import { parseDateString } from "../../../utils/parseDateString";
import { useRecoilState } from "recoil";
import { SortableRoute, editingTripPlanState } from "../../../recoil/tripState";

interface Props {
  day: number;
  date: string;
}

function DayPlanEdit({ day, date: dateString }: Props) {
  const date = parseDateString(dateString);
  const [tempData, setTempData] = useRecoilState(editingTripPlanState);
  const [route, setRoute] = useState<SortableRoute[]>(
    // tempData[day - 1].route || []
    []
  );

  useEffect(() => {
    if (
      tempData &&
      tempData[day - 1] &&
      tempData[day - 1].route.toLocaleString() !== route.toLocaleString()
    ) {
      setRoute(tempData[day - 1].route);
    }
  }, [tempData]);

  useEffect(() => {
    setTempData((prev) =>
      prev.map((dayPlan) => {
        if (dayPlan.day === day) {
          return { ...dayPlan, route: route };
        } else {
          return dayPlan;
        }
      })
    );
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
          {tempData &&
            route.map((place, index) => (
              <EditablePlaceItem
                key={place.id}
                day={day}
                place={place}
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
