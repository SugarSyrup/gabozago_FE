import * as S from "./style";
import { useLongPress } from "use-long-press";
import ThemeIcon from "../../../assets/icons/theme.svg?react";
import LocationIcon from "../../../assets/icons/location.svg?react";
import EditIcon from "../../../assets/icons/edit.svg?react";
import Typography from "../../common/Typography";
import { createSearchParams, useNavigate } from "react-router-dom";
import { DateObject } from "../../../utils/parseDateString";

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
  date: DateObject;
  index: number;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function TripPlanPlaceItem({
  detailRouteId,
  placeName,
  placeTheme,
  placeId,
  memo,
  day,
  date,
  index,
  setIsEditMode,
}: Props) {
  const navigate = useNavigate();
  const onLongClick = useLongPress(
    () => {
      console.log("longClick");
      setIsEditMode(true);
    },
    {
      threshold: 600, // ms
      captureEvent: true, // 첫번째 인자로 들어온 callback 함수가 react MouseEvent를 도와주게 설정
      cancelOnMovement: false, // 꾹 눌렀다가 옆으로 이동했을때 취소
    }
  );

  return (
    <S.PlaceBox {...onLongClick()}>
      <S.TitleBox>
        <div
          onClick={() => {
            navigate(`/place/${placeId}`);
          }}
        >
          <Typography.Title size="md" noOfLine={3}>
            {placeName}
          </Typography.Title>
          <S.InfoContainer>
            <S.InfoSpan>
              {/* @todo: API에 지역 없음 */}
              <LocationIcon />
              지역
            </S.InfoSpan>
            <S.InfoSpan>
              <ThemeIcon />
              {placeTheme}
            </S.InfoSpan>
          </S.InfoContainer>
        </div>
        <S.MemoButton
          onClick={(e) => {
            e.stopPropagation();
            navigate({
              pathname: `./memo`,
              search: createSearchParams({
                detailRouteId: String(detailRouteId),
                day: String(day),
                placeName: placeName,
                date: `${date.month}. ${date.day}(${date.dayOfWeek})`,
                text: memo || "",
              }).toString(),
            });
          }}
        >
          메모하기
          <EditIcon />
        </S.MemoButton>
      </S.TitleBox>
      {memo && memo.length >= 0 && <S.MemoParagraph>{memo}</S.MemoParagraph>}
    </S.PlaceBox>
  );
}

export default TripPlanPlaceItem;
