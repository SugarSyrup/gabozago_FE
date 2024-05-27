import * as S from "./style";
import ArrowSwapIcon from "../../../assets/icons/arrow_swap.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  editingTripPlanState,
  selectedPlacesState,
} from "../../../recoil/tripState";

function EditModeBottomControlBox() {
  const selectedPlaces = useRecoilValue(selectedPlacesState);
  const resetSelectedPlaces = useResetRecoilState(selectedPlacesState);
  const setTempData = useSetRecoilState(editingTripPlanState);

  const deleteItems = () => {
    setTempData((prev) => {
      return prev.map((item) => {
        const updatedRoute = item.route.filter((place, index) => {
          return !selectedPlaces.some(
            (selected) =>
              selected.day === item.day && selected.placeIndex === index
          );
        });
        return { ...item, route: updatedRoute };
      });
    });
    resetSelectedPlaces();
  };

  return (
    <S.Container>
      <S.Button>
        <ArrowSwapIcon />
        <span>날짜 이동</span>
      </S.Button>
      <S.Button onClick={deleteItems}>
        <DeleteIcon />
        <span>삭제하기</span>
      </S.Button>
    </S.Container>
  );
}

export default EditModeBottomControlBox;
