import * as S from "./style";
import { useLongPress } from "use-long-press";
import { useSetRecoilState } from "recoil";
import AddPlaceButton from "../AddPlaceButton";
import imagePlaceholder from "../../../assets/icons/image_placeholder_circle.svg";
import CarIcon from "../../../assets/icons/car.svg?react";
import SubwayIcon from "../../../assets/icons/subway.svg?react";
import WalkIcon from "../../../assets/icons/walk.svg?react";
import { planViewModeState } from "../../../recoil/planViewModeState";
import { Place } from "../../../assets/data/tripPlanData";

interface Props {
  place: Place;
  index: number;
  addPlaceButton?: boolean;
}
function TripPlanPlaceItem({ place, index, addPlaceButton = false }: Props) {
  const setViewMode = useSetRecoilState(planViewModeState);
  const hasMemo = place.memo !== "";
  const transportIconMap = {
    도보: <WalkIcon />,
    지하철: <SubwayIcon />,
    버스: <SubwayIcon />,
    대중교통: <SubwayIcon />,
    차량: <CarIcon />,
  };
  const onLongClick = useLongPress(() => {
    setViewMode("EDIT");
  });

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
      <S.PlaceBox {...onLongClick()}>
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
