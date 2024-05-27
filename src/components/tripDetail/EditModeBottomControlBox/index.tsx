import * as S from "./style";
import ArrowSwapIcon from "../../../assets/icons/arrow_swap.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  editingTripPlanState,
  selectedPlacesState,
  tripState,
} from "../../../recoil/tripState";
import usePopup from "../../../hooks/usePopup";
import useSelect from "../../../hooks/useSelect";
import useModal from "../../../hooks/useModal";
import Typography from "../../common/Typography";
import { parseDateString } from "../../../utils/parseDateString";
import Button from "../../common/Button";

function EditModeBottomControlBox() {
  const selectedPlaces = useRecoilValue(selectedPlacesState);
  const resetSelectedPlaces = useResetRecoilState(selectedPlacesState);
  const tripData = useRecoilValue(tripState);
  const setTempData = useSetRecoilState(editingTripPlanState);
  const { Modal, modalOpen, modalClose } = useModal({
    title: "날짜 변경하기",
    handle: true,
  });
  const { Select, selectedIndex } = useSelect();

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
    <>
      <Modal>
        <S.SelectContainer>
          <Select
            options={tripData.plan.map(({ day, date: dateString }, index) => {
              const date = parseDateString(dateString);
              const color = selectedIndex.includes(index)
                ? "#5276FA"
                : "#121212";
              return (
                <S.DateParagraph>
                  <Typography.Title size="lg" color={color}>
                    Day {day}
                  </Typography.Title>
                  <Typography.Title size="md" color={color}>
                    {`${date?.year}. ${date?.month}. ${date?.day}(${date?.dayOfWeek})`}
                  </Typography.Title>
                </S.DateParagraph>
              );
            })}
          />
        </S.SelectContainer>
        <S.SubmitButtonContainer>
          <Button
            type="normal"
            size="lg"
            active={true}
            width="100%"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            적용하기
          </Button>
        </S.SubmitButtonContainer>
      </Modal>
      <S.Container>
        <S.Button onClick={modalOpen}>
          <ArrowSwapIcon />
          <span>날짜 이동</span>
        </S.Button>
        <S.Button onClick={deleteItems}>
          <DeleteIcon />
          <span>삭제하기</span>
        </S.Button>
      </S.Container>
    </>
  );
}

export default EditModeBottomControlBox;
