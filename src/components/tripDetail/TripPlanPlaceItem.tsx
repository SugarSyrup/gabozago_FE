import * as S from "../../styles/tripDetail/TripPlanPlaceItem.style";
import { Place } from "../../assets/data/tripPlanData";
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
          <S.MarkerSpan>{index + 1}</S.MarkerSpan>
        </S.MarkerBox>
        <S.PlaceBox>
          <S.PlaceTextBox hasMemo={hasMemo}>
            <div>
              <S.PlaceNameParagraph>{place.placeName}</S.PlaceNameParagraph>
              <S.PlaceThemeParagraph>{place.theme}</S.PlaceThemeParagraph>
            </div>
            {hasMemo && (
              <S.PlaceMemoParagraph>{place.memo}</S.PlaceMemoParagraph>
            )}
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
    </>
  );
}

export default TripPlanPlaceItem;
