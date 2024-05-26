import { useState } from "react";
import DayPlanEdit from "../DayPlanEdit";
import { DayPlan } from "../TripPlanList";
import * as S from "./style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { tripState } from "../../../recoil/tripState";
import { patch } from "../../../utils/api";
import { useParams } from "react-router-dom";

interface Props {
  data: DayPlan[];
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlanEditMode({ data, setIsEditMode }: Props) {
  const { id } = useParams();
  const [tripData, setTripData] = useRecoilState(tripState);
  const [tempData, setTempData] = useState<DayPlan[]>(data);

  const patchTripPlan = (data: DayPlan[]) => {
    patch<DayPlan[]>(`my-travel/${id}`, data);
  };

  return (
    <>
      <S.EditComplateButton
        onClick={() => {
          if (tripData.plan.toString() !== tempData.toString()) {
            patchTripPlan(tempData);
            setTripData((prev) => ({ ...prev, plan: tempData }));
          }
          setIsEditMode(false);
        }}
      >
        완료
      </S.EditComplateButton>
      {data.map((dayPlan) => (
        <DayPlanEdit
          day={dayPlan.day}
          date={dayPlan.date}
          route={dayPlan.route}
          tempData={tempData}
          setTempData={setTempData}
        />
      ))}
    </>
  );
}

export default PlanEditMode;
