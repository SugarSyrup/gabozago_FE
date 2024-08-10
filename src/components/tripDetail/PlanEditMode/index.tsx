import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import * as S from './style';
import { patch } from '@_utils/api';
import DayPlanEdit from '../DayPlanEdit';
import { DayPlan } from '../TripPlanList';
import { editingTripPlanState, tripState } from '../../../recoil/tripState';

interface Props {
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanEditMode({ setIsEditMode }: Props) {
  const { id } = useParams();
  const [tripData, setTripData] = useRecoilState(tripState);
  const [tempData, setTempData] = useRecoilState(editingTripPlanState);

  const patchTripPlan = (data: DayPlan[]) => {
    const patchData = data.map((dayPlanItem) => {
      const { day, route } = dayPlanItem;
      return {
        day,
        route: route.map((place) => {
          return { detailRouteId: place.detailRouteId, placeId: place.placeId };
        }),
      };
    });
    // @TODO: 다른 날짜의 여행지를 이동할 때, 500 에러 발생
    patch<DayPlan[]>(`my-travel/${id}`, patchData);
  };

  const onCancle = () => {
    setIsEditMode(false);
  };

  const onComplate = () => {
    const isDiff = JSON.stringify(tripData.plan) !== JSON.stringify(tempData);

    // 변경된 내용이 있을 경우에만 patch 수행
    if (isDiff) {
      patchTripPlan(tempData);
      setTripData((prev) => ({ ...prev, plan: tempData }));
    }

    setIsEditMode(false);
  };

  const onDragStart = (e) => {
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grab';
  };
  const onDragEnd = (e) => {
    const { destination, source, draggableId } = e;

    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const destinationDay = Number(destination.droppableId.split('-')[1]);
    const sourceDay = Number(source.droppableId.split('-')[1]);

    if (destinationDay === sourceDay) {
      // 같은 source에서 변경했을 때
      setTempData(
        tempData.map((dayPlan) => {
          if (dayPlan.day === sourceDay) {
            const tempRoute = [...dayPlan.route];
            const targetPlace = tempRoute[source.index];

            tempRoute.splice(source.index, 1);
            tempRoute.splice(destination.index, 0, targetPlace);

            return { ...dayPlan, route: tempRoute };
          }
          return dayPlan;
        }),
      );
    } else {
      // 다른 droppable로 이동했을 때
      setTempData(() => {
        const targetPlace = tempData[sourceDay - 1].route.find(
          (place, index) => index === source.index,
        );

        return tempData.map((dayPlan) => {
          if (dayPlan.day === sourceDay) {
            const tempRoute = [...dayPlan.route];
            tempRoute.splice(source.index, 1);

            return { ...dayPlan, route: tempRoute };
          }
          if (dayPlan.day === destinationDay) {
            const tempRoute = [...dayPlan.route];
            if (targetPlace) {
              tempRoute.splice(destination.index, 0, targetPlace);
            }
            return { ...dayPlan, route: tempRoute };
          }
          return dayPlan;
        });
      });
    }
    document.body.style.userSelect = 'auto';
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <S.ButtonContainer>
        <S.EditButton onClick={onCancle} color="#a6a6a6">
          취소
        </S.EditButton>
        <S.EditButton onClick={onComplate}>완료</S.EditButton>
      </S.ButtonContainer>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {tempData &&
          tempData.map((dayPlan) => (
            <DayPlanEdit key={`edit-day-${dayPlan.day}`} day={dayPlan.day} date={dayPlan.date} />
          ))}
      </DragDropContext>
    </>
  );
}

export default PlanEditMode;
