import * as S from "./style";
import { useLongPress } from "use-long-press";

export interface PlaceData {
  detailRouteId: number;
  placeName: string;
  placeTheme: string;
  placeId: number;
  googlePlaceId: string;
  placeImage: string;
  latitude: number;
  longitude: number;
  memo: string;
}

interface Props extends PlaceData {
  day: number;
  index: number;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function TripPlanPlaceItem({
  detailRouteId,
  placeName,
  placeTheme,
  placeId,
  googlePlaceId,
  placeImage,
  latitude,
  longitude,
  memo,
  day,
  index,
  setIsEditMode,
}: Props) {
  const hasMemo = memo !== "";
  const onLongClick = useLongPress(
    () => {
      console.log("longClick");
      setIsEditMode(true);
    },
    {
      threshold: 500, // ms
      captureEvent: true, // 첫번째 인자로 들어온 callback 함수가 react MouseEvent를 도와주게 설정
      cancelOnMovement: false, // 꾹 눌렀다가 옆으로 이동했을때 취소
    }
  );

  return (
    // <S.PlaceItem >
    <S.PlaceBox {...onLongClick()}>
      <S.PlaceTextBox hasMemo={hasMemo}>
        <div>
          <S.PlaceNameParagraph>{placeName}</S.PlaceNameParagraph>
          <S.PlaceThemeParagraph>{placeTheme}</S.PlaceThemeParagraph>
        </div>
        {hasMemo && <S.PlaceMemoParagraph>{memo}</S.PlaceMemoParagraph>}
      </S.PlaceTextBox>
    </S.PlaceBox>
    // </S.PlaceItem>
  );
}

export default TripPlanPlaceItem;
