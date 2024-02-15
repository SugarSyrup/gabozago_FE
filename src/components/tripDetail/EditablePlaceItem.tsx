import React, { useState } from "react";
import * as S from "../../styles/tripDetail/EditablePlaceItem";
import SelectIcon from "../../assets/icons/select.svg?react";
import SelectFilledIcon from "../../assets/icons/select_filled.svg?react";
import HamburgerIcon from "../../assets/icons/hamburger.svg?react";
import { Place } from "../../assets/data/tripPlanData";

interface Props {
  place: Place;
  index: number;
}
function EditablePlaceItem({ place, index }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <S.ListItem>
      <S.Wrapper
        isSelected={isSelected}
        onClick={() => {
          setIsSelected((prev) => !prev);
        }}
      >
        {isSelected ? <SelectFilledIcon /> : <SelectIcon />}
        <S.PlaceInfo>
          <span>{index + 1}</span>
          <div>
            <p>{place.placeName}</p>
            <p>{place.theme}</p>
          </div>
        </S.PlaceInfo>
        <HamburgerIcon />
      </S.Wrapper>
    </S.ListItem>
  );
}

export default EditablePlaceItem;
