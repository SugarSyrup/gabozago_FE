import React from "react";
import AddPlaceButton from "./AddPlaceButton";
import * as S from "../../styles/tripDetail/TripPlanList.style";
import { DayPlan } from "../../assets/data/tripPlanData";
import TripPlanPlaceItem from "./TripPlanPlaceItem";

interface Props {
  view?: "all" | string;
  plan?: DayPlan[];
  days?: number;
}
function TripPlanList({ days, view, plan = [] }: Props) {
  const dateToString = (date: Date) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return `${date.getUTCMonth() + 1}.${date.getUTCDate()}/${
      days[date.getUTCDay()]
    }`;
  };

  return (
    <S.Container>
      <button>전체 일정</button>
      <button>편집</button>
      <S.PlaceListContainer>
        {plan.map((dayPlan) => (
          <div>
            <S.DayInfo>
              Day {dayPlan.day}
              <span>{dateToString(dayPlan.date)}</span>
            </S.DayInfo>
            <S.PlaceList>
              {dayPlan.route.length === 0 ? (
                <AddPlaceButton />
              ) : (
                <>
                  {dayPlan.route.map((place, index) => (
                    <TripPlanPlaceItem
                      place={place}
                      index={index}
                      addPlaceButton={
                        index === dayPlan.route.length - 1 && true
                      }
                    />
                  ))}
                </>
              )}
            </S.PlaceList>
          </div>
        ))}
      </S.PlaceListContainer>
    </S.Container>
  );
}

export default TripPlanList;
