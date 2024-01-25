import React from "react";
import AddPlaceButton from "./AddPlaceButton";
import * as S from "../../styles/tripDetail/TripPlanList.style";

interface Props {
  data?: [];
  days?: number;
}
function TripPlanList({ days, data = [] }: Props) {
  const dummy = [];
  return (
    <S.Container>
      <AddPlaceButton size="default" />
      <AddPlaceButton size="small" />
    </S.Container>
  );
}

export default TripPlanList;
