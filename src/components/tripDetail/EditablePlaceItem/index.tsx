import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './style';
import SelectIcon from '../../../assets/icons/select.svg?react';
import SelectFilledIcon from '../../../assets/icons/select_filled.svg?react';
import HamburgerIcon from '../../../assets/icons/hamburger.svg?react';
import { PlaceData } from '../TripPlanPlaceItem';
import { editingTripPlanState, selectedPlacesState } from '../../../recoil/tripState';

interface Props {
  day: number;
  place: PlaceData;
  index: number;
}
function EditablePlaceItem({ place, day, index }: Props) {
  const [isSelected, setIsSelected] = useState(false);
  const [, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [, setTempData] = useRecoilState(editingTripPlanState);
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
      setTempData((prev) =>
        prev.map((dayPlan) => {
          if (dayPlan.day === day) {
            const newRoute = [...dayPlan.route];
            newRoute.splice(index, 1);

            return { ...dayPlan, route: newRoute };
          }
          return dayPlan;
        }),
      );
    }
    setTranslateX(0);
    setIsMouseDown(false);
  };

  const toggleSelected = () => {
    if (isSelected === false) {
      setIsSelected(true);
      setSelectedPlaces((prev) => {
        const temp = [...prev];
        temp.push({ day, placeIndex: index });

        return temp;
      });
    } else {
      setIsSelected(false);
      setSelectedPlaces((prev) =>
        prev.filter(({ day, placeIndex }) => !(day === day && placeIndex === index)),
      );
    }
  };

  return (
    <Draggable draggableId={`place-${place.detailRouteId}`} index={index}>
      {(provided, snapshot) => {
        console.dir(provided);
        return (
          <S.ListItem ref={provided.innerRef} {...provided.draggableProps}>
            <S.Wrapper
              isSelected={isSelected || snapshot.isDragging}
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
              <div {...provided.dragHandleProps}>
                <HamburgerIcon />
              </div>
            </S.Wrapper>
          </S.ListItem>
        );
      }}
    </Draggable>
  );
}

export default EditablePlaceItem;
