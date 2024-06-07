import * as S from "./style";
import { MouseEvent, TouchEvent, useState } from "react";
import SelectIcon from "../../../assets/icons/select.svg?react";
import SelectFilledIcon from "../../../assets/icons/select_filled.svg?react";
import HamburgerIcon from "../../../assets/icons/hamburger.svg?react";
import { PlaceData } from "../TripPlanPlaceItem";
import { SortableRoute } from "../../../recoil/tripState";
import { useRecoilState } from "recoil";
import { selectedPlacesState } from "../../../recoil/tripState";

interface Props {
  day: number;
  place: PlaceData;
  index: number;
  setRoute: React.Dispatch<React.SetStateAction<SortableRoute[]>>;
}
function EditablePlaceItem({ place, setRoute, day, index }: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const [, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsMouseDown(true);
  };

  const handleMove = (clientX: number) => {
    if (isMouseDown) {
      const temp = (clientX - startX) / 2;
      if (temp < -80) {
        setTranslateX(-80);
      } else if (temp < 0) {
        setTranslateX(temp);
      }
    }
  };

  const handleEnd = () => {
    if (isMouseDown && translateX < -50) {
      setRoute((prev) => {
        const temp = [...prev];
        temp.splice(index, 1);
        return temp;
      });
    }
    setTranslateX(0);
    setIsMouseDown(false);
  };

  const toggleSelected = () => {
    if (isSelected === false) {
      setIsSelected(true);
      setSelectedPlaces((prev) => {
        const temp = [...prev];
        temp.push({ day: day, placeIndex: index });

        return temp;
      });
    } else {
      setIsSelected(false);
      setSelectedPlaces((prev) =>
        prev.filter(
          ({ day, placeIndex }) => !(day === day && placeIndex === index)
        )
      );
    }
  };

  return (
    <S.ListItem>
      <S.Wrapper
        isSelected={isSelected}
        onClick={toggleSelected}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
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
