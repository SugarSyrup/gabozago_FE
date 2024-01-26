import React from "react";
import * as S from "../../styles/tripDetail/TripPlanPlaceItem.style";
import { Place } from "../../assets/data/tripPlanData";
import EllipseIcon from "../../assets/icons/ellipse.svg?react";
import imagePlaceholder from "../../assets/icons/image_placeholder_circle.svg";
import AddPlaceButton from "./AddPlaceButton";

interface Props {
  place: Place;
  index: number;
  addPlaceButton?: boolean;
}
function TripPlanPlaceItem({ place, index, addPlaceButton = false }: Props) {
  const hasMemo = place.memo !== "";
  return (
    <>
      <S.PlaceItem>
        <S.MarkerBox>
          <EllipseIcon />
          <span>{index + 1}</span>
        </S.MarkerBox>
        <S.PlaceBox hasMemo={hasMemo}>
          <div>
            <div>
              <p>{place.placeName}</p>
              <p>{place.theme}</p>
            </div>
            {hasMemo && <p>{place.memo}</p>}
          </div>
          <img
            src={place.placeImage ? place.placeImage : imagePlaceholder}
            alt=""
          />
        </S.PlaceBox>
        {addPlaceButton && (
          <>
            <span></span>
            <AddPlaceButton size="small" />
          </>
        )}
      </S.PlaceItem>
    </>
  );
}

export default TripPlanPlaceItem;
