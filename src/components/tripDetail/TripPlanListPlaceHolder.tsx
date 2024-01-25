import React from "react";
import AddPlaceButton from "./AddPlaceButton";
import * as S from "../../styles/tripDetail/TripPlanListPlaceHolder.style";

interface Props {
  days: number;
}
function TripPlanListPlaceHolder({ days = 1 }: Props) {
  const title: string[] = [];
  for (let i = 1; i <= days; i++) {
    title.push(`Day ${i}`);
  }
  return (
    <S.List>
      {title.map((item) => (
        <S.Item>
          <div>
            <p>{item}</p>
            <AddPlaceButton size="default" />
          </div>
        </S.Item>
      ))}
    </S.List>
  );
}

export default TripPlanListPlaceHolder;
