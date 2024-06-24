import { useRecoilValue } from 'recoil';
import * as S from './style';
import DayPlan from '../DayPlan';
import ArrowBottomIcon from '../../../assets/icons/arrow_bottom.svg?react';
import { PlaceData } from '../TripPlanPlaceItem';
import { tripState } from '../../../recoil/tripState';
import useModal from '../../../hooks/useModal';
import Typography from '../../common/Typography';
import CheckedIcon from '../../../assets/icons/check.svg?react';

export interface DayPlan {
  day: number;
  date: string;
  dayOfWeek: '일' | '월' | '화' | '수' | '목' | '금' | '토';
  route: PlaceData[];
}

interface Props {
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  dayFilter: number;
  setDayFilter: React.Dispatch<React.SetStateAction<number>>;
}

function TripPlanList({ setIsEditMode, dayFilter, setDayFilter }: Props) {
  const data = useRecoilValue(tripState);
  const { Modal, modalOpen, modalClose } = useModal({});

  const onFilterClick = (dayFilterIndex: number) => {
    setDayFilter(dayFilterIndex);
    modalClose();
  };

  return (
    <S.Container>
      <Modal>
        <S.ModalHeader
          onClick={() => {
            onFilterClick(0);
          }}
          isHighlight={dayFilter === 0}
        >
          <Typography.Title size="lg" color="inherit">
            일정 전체보기
          </Typography.Title>
          {dayFilter === 0 && <CheckedIcon />}
        </S.ModalHeader>
        <S.ModalContents>
          {data.plan.map((dayPlan, idx) => (
            <S.DayItem
              key={`dayfilter-${dayPlan.day}`}
              onClick={() => {
                onFilterClick(idx + 1);
              }}
            >
              <S.DayInfo isHighlight={dayFilter === idx + 1}>
                <Typography.Title size="lg" color="inherit">
                  Day {dayPlan.day}
                </Typography.Title>
                <Typography.Title size="lg" color="inherit">
                  {`${dayPlan.date.replace('-', '.').replace('-', '.')}(${dayPlan.dayOfWeek})`}
                </Typography.Title>
              </S.DayInfo>
              {dayFilter === idx + 1 && <CheckedIcon />}
            </S.DayItem>
          ))}
        </S.ModalContents>
      </Modal>
      {data.plan.length >= 0 && (
        <S.DayFilterButton
          onClick={() => {
            modalOpen();
          }}
        >
          전체 일정
          <ArrowBottomIcon />
        </S.DayFilterButton>
      )}
      <S.PlaceListContainer>
        {data.plan.map(
          (dayPlan, dayIndex) =>
            // 날짜 필터가 없거나 해당하는 날짜의 DayPlan 보이기
            (dayFilter === 0 || dayFilter === dayIndex + 1) && (
              <DayPlan
                key={`dayplan-${dayIndex + 1}`}
                day={dayPlan.day}
                date={dayPlan.date}
                data={dayPlan.route}
                setIsEditMode={setIsEditMode}
              />
            ),
        )}
      </S.PlaceListContainer>
    </S.Container>
  );
}

export default TripPlanList;
