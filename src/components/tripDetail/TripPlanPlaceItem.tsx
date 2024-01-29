import * as S from "../../styles/tripDetail/TripPlanPlaceItem.style";
import { Place } from "../../assets/data/tripPlanData";
import imagePlaceholder from "../../assets/icons/image_placeholder_circle.svg";
import CarIcon from "../../assets/icons/transport_car.svg?react";
import SubwayIcon from "../../assets/icons/transport_subway.svg?react";
import WalkIcon from "../../assets/icons/transport_walk.svg?react";
import AddPlaceButton from "./AddPlaceButton";

interface Props {
  place: Place;
  index: number;
  addPlaceButton?: boolean;
}
function TripPlanPlaceItem({ place, index, addPlaceButton = false }: Props) {
  const hasMemo = place.memo !== "";
  const transportIconMap = {
    도보: <WalkIcon />,
    지하철: <SubwayIcon />,
    버스: <SubwayIcon />,
    대중교통: <SubwayIcon />,
    차량: <CarIcon />,
  };

  return (
    <S.PlaceItem>
      <S.MarkerBox>
        <S.NumberSpan>{index + 1}</S.NumberSpan>
        <S.TransportBox>
          {place.transport && place.travelTime && (
            <p>
              <span>{place.transport}</span>
              {transportIconMap[place.transport]}
              <span>{place.travelTime}</span>
            </p>
          )}
        </S.TransportBox>
      </S.MarkerBox>
      <S.PlaceBox>
        <S.PlaceTextBox hasMemo={hasMemo}>
          <div>
            <S.PlaceNameParagraph>{place.placeName}</S.PlaceNameParagraph>
            <S.PlaceThemeParagraph>{place.theme}</S.PlaceThemeParagraph>
          </div>
          {hasMemo && <S.PlaceMemoParagraph>{place.memo}</S.PlaceMemoParagraph>}
        </S.PlaceTextBox>
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
  );
}

export default TripPlanPlaceItem;
