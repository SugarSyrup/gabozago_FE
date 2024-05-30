import * as S from "./style";
import { DateObject, parseDateString } from "../../../utils/parseDateString";
import TripPlanPlaceItem, { PlaceData } from "../TripPlanPlaceItem";
import AddPlaceButton from "../AddPlaceButton";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";
interface Props {
  data: PlaceData[];
  day: number;
  date: string;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
function DayPlan({ data, day, date: dateString, setIsEditMode }: Props) {
  const navigate = useNavigate();
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  const date = parseDateString(dateString);
  const markerColors = [
    "#5276FA",
    "#FFAF37",
    "#BA75FF",
    "#FA5252",
    "#30A9DE",
    "#F29661",
    "#78CBA2",
  ];

  const clickAddPlaceButtonHandler = () => {
    setSelectedPlaces([]);
    navigate(`./${day}/search`);
  };

  return (
    <S.Container>
      <S.DayInfo>
        <div>
          Day {day}
          <span>{`${date?.month}. ${date?.day}(${date?.dayOfWeek})`}</span>
        </div>
        <S.EditButton
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          편집
        </S.EditButton>
      </S.DayInfo>
      <S.PlaceList>
        {data.length === 0 ? (
          <AddPlaceButton onClick={clickAddPlaceButtonHandler} />
        ) : (
          <>
            {data.map((place, index) => (
              <S.PlaceItem>
                <S.MarkerBox color={markerColors[day - (1 % 7)]}>
                  <S.NumberSpan>{index + 1}</S.NumberSpan>
                </S.MarkerBox>
                <TripPlanPlaceItem
                  {...place}
                  day={day}
                  date={date as DateObject}
                  index={index}
                  setIsEditMode={setIsEditMode}
                />
              </S.PlaceItem>
            ))}
            <S.PlaceItem>
              <div></div>
              <AddPlaceButton
                size="small"
                onClick={clickAddPlaceButtonHandler}
              />
            </S.PlaceItem>
          </>
        )}
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlan;
