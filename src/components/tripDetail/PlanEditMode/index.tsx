import DayPlanEdit from "../DayPlanEdit";
import { DayPlan } from "../TripPlanList";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { editingTripPlanState, tripState } from "../../../recoil/tripState";
import { patch } from "../../../utils/api";
import { useParams } from "react-router-dom";

interface Props {
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanEditMode({ setIsEditMode }: Props) {
  const { id } = useParams();
  const [tripData, setTripData] = useRecoilState(tripState);
  const [tempData] = useRecoilState(editingTripPlanState);

  const patchTripPlan = (data: DayPlan[]) => {
    patch<DayPlan[]>(`my-travel/${id}`, data);
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

  return (
    <>
      <S.ButtonContainer>
        <S.EditComplateButton
          onClick={() => {
            setIsEditMode(false);
          }}
          color="#a6a6a6"
        >
          취소
        </S.EditComplateButton>
        <S.EditComplateButton onClick={onComplate}>완료</S.EditComplateButton>
      </S.ButtonContainer>
      {tempData &&
        tempData.map((dayPlan) => (
          <DayPlanEdit
            key={`edit-day-${dayPlan.day}`}
            day={dayPlan.day}
            date={dayPlan.date}
          />
        ))}
    </>
  );
}

export default PlanEditMode;
