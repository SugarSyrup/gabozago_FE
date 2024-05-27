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
  return (
    <>
      <S.EditComplateButton
        onClick={() => {
          // 변경된 내용이 있을 경우에만 patch 수행
          const isDiff =
            JSON.stringify(tripData.plan) !== JSON.stringify(tempData);

          if (isDiff) {
            patchTripPlan(tempData);
            setTripData((prev) => ({ ...prev, plan: tempData }));
          }
          setIsEditMode(false);
        }}
      >
        완료
      </S.EditComplateButton>
      {tempData &&
        tempData.map((dayPlan) => (
          <DayPlanEdit day={dayPlan.day} date={dayPlan.date} />
        ))}
    </>
  );
}

export default PlanEditMode;
