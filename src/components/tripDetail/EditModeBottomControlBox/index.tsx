import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import * as S from './style';
import ArrowSwapIcon from '../../../assets/icons/arrow_swap.svg?react';
import DeleteIcon from '../../../assets/icons/delete.svg?react';
import {
  SortableRoute,
  editingTripPlanState,
  selectedPlacesState,
  tripState,
} from '../../../recoil/tripState';
import useSelect from '../../../hooks/useSelect';
import useModal from '../../../hooks/useModal';
import Typography from '../../common/Typography';
import { parseDateString } from '@_utils/calendar';
import Button from '../../common/Button';

function EditModeBottomControlBox() {
  const selectedPlaces = useRecoilValue(selectedPlacesState);
  const resetSelectedPlaces = useResetRecoilState(selectedPlacesState);
  const tripData = useRecoilValue(tripState);
  const [tempData, setTempData] = useRecoilState(editingTripPlanState);
  const { Modal, modalOpen, modalClose } = useModal({
    title: '날짜 변경하기',
    handle: true,
  });
  const { Select, selectedIndex } = useSelect();

  const deleteItems = () => {
    if (selectedPlaces.length > 0) {
      setTempData((prev) =>
        prev.map((item) => {
          const updatedRoute = item.route.filter(
            (place, index) =>
              !selectedPlaces.some(
                (selected) => selected.day === item.day && selected.placeIndex === index,
              ),
          );
          return { ...item, route: updatedRoute };
        }),
      );
    }
  };

  const moveItems = () => {
    if (selectedPlaces.length > 0) {
      const targetPlaces: SortableRoute[] = [];

      tempData.map((dayPlan) => {
        // 옮겨질 장소들을 targetPlaces에 저장
        dayPlan.route.map((place, index) => {
          if (
            selectedPlaces.some(
              (selected) => selected.day === dayPlan.day && selected.placeIndex === index,
            )
          ) {
            targetPlaces.push(place);
          }
        });
      });

      // 선택한 항목들 삭제
      deleteItems();

      // 원하는 날짜에 추가
      setTempData((prev) =>
        prev.map((dayplan, index) => {
          if (selectedIndex.includes(index)) {
            return { ...dayplan, route: dayplan.route.concat(targetPlaces) };
          }
          return dayplan;
        }),
      );
    }
  };

  return (
    <>
      <Modal>
        <S.SelectContainer>
          <Select
            options={tripData.plan.map(({ day, date: dateString }, index) => {
              const date = parseDateString(dateString);
              const color = selectedIndex.includes(index) ? '#5276FA' : '#121212';
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
            active
            width="100%"
            onClick={(e) => {
              e.preventDefault();
              moveItems();
              resetSelectedPlaces();
              modalClose();
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
        <S.Button
          onClick={() => {
            deleteItems();
            resetSelectedPlaces();
          }}
        >
          <DeleteIcon />
          <span>삭제하기</span>
        </S.Button>
      </S.Container>
    </>
  );
}

export default EditModeBottomControlBox;
