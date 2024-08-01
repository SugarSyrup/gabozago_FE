import { Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import * as S from './style';
import EditablePlaceItem from '../EditablePlaceItem';
import { parseDateString } from '@_utils/calendar';
import { editingTripPlanState } from '../../../recoil/tripState';

interface Props {
  day: number;
  date: string;
}

function DayPlanEdit({ day, date: dateString }: Props) {
  const date = parseDateString(dateString);
  const [tempData] = useRecoilState(editingTripPlanState);

  return (
    <S.Container>
      <S.DayParagraph>
        Day {day}
        <span>{`${date?.month}. ${date?.day}(${date?.dayOfWeek})`}</span>
      </S.DayParagraph>
      <Droppable droppableId={`day-${day}`} type="PLACE">
        {(provided, snapshot) => (
          <S.PlaceList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tempData[day - 1].route.map((place, index) => (
              <EditablePlaceItem
                key={`edit-place-${place.detailRouteId}`}
                day={day}
                place={place}
                index={index}
              />
            ))}
            {provided.placeholder}
          </S.PlaceList>
        )}
      </Droppable>
    </S.Container>
  );
}

export default DayPlanEdit;
