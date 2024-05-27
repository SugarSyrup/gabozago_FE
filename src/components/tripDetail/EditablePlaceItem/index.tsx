import * as S from "./style";
import { useState } from "react";
import SelectIcon from "../../../assets/icons/select.svg?react";
import SelectFilledIcon from "../../../assets/icons/select_filled.svg?react";
import HamburgerIcon from "../../../assets/icons/hamburger.svg?react";
import { PlaceData } from "../TripPlanPlaceItem";
import { SortableRoute } from "../DayPlanEdit";

interface Props {
  day: number;
  place: PlaceData;
  index: number;
  setRoute: React.Dispatch<React.SetStateAction<SortableRoute[]>>;
}
function EditablePlaceItem({ place, setRoute, day, index }: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  return (
    <S.ListItem>
      <S.Wrapper
        isSelected={isSelected}
        onClick={() => {
          setIsSelected((prev) => !prev);
        }}
        onMouseDown={(e) => {
          setStartX(e.clientX);
          setIsMouseDown(true);
        }}
        onMouseMove={(e) => {
          if (isMouseDown) {
            const temp = e.clientX - startX;

            // -80px까지 드래그 가능
            if (temp < -80) {
              setTranslateX(-80);
            } else if (temp < 0) {
              setTranslateX(e.clientX - startX);
            }
          }
        }}
        onMouseUp={() => {
          if (isMouseDown && translateX < 40) {
            setRoute((prev) => {
              const temp = [...prev];
              temp.splice(index, 1);
              return temp;
            });
          }
          setTranslateX(0);
          setIsMouseDown(false);
        }}
        onMouseLeave={() => {
          setTranslateX(0);
          setIsMouseDown(false);
        }}
        translateX={translateX}
      >
        {isSelected ? <SelectFilledIcon /> : <SelectIcon />}
        <S.PlaceInfo>
          <div>
            <p>{place.placeName}</p>
            <p>{place.placeTheme}</p>
          </div>
        </S.PlaceInfo>
        <HamburgerIcon className="handle" />
      </S.Wrapper>
    </S.ListItem>
  );
}

export default EditablePlaceItem;
