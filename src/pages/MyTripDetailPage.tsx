import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../styles/MyTripDetailPage.style";
import PageTemplate from "../components/common/PageTemplate";
import TripInfo from "../components/tripDetail/TripInfo";
import TripPlanListPlaceHolder from "../components/tripDetail/TripPlanListPlaceHolder";
import TripPlanList from "../components/tripDetail/TripPlanList";
import ClapBlueIcon from "../assets/icons/clap_blue.svg?react";

import { Plan, data as planData } from "../assets/data/tripPlanData";

function MyTripDetailPage() {
  /**
   * @todo: id를 통해 일정 데이터 비동기 요청 불러와 State로 관리하기
   */
  const { id } = useParams(); // 파라미터에 게시글 ID
  console.log(id);
  const [data, setData] = useState<Plan>(planData);
  const username = "최민석";
  const hasPlan = (data: Plan) => {
    return data.plan.length !== 0;
  };

  return (
    <PageTemplate nav={true} header={false}>
      {hasPlan(data) ? (
        <>
          <TripInfo
            size={"sm"}
            title={data.title}
            departuereDate={data.departureDate}
            arrivalDate={data.arrivalDate}
            days={data.days}
            transport={data.transport}
          />
          <TripPlanList days={data.days} plan={data.plan} />
        </>
      ) : (
        <>
          <TripInfo
            title={data.title}
            departuereDate={data.departureDate}
            arrivalDate={data.arrivalDate}
            days={data.days}
            transport={data.transport}
          />
          <S.MessageBox>
            <p>
              {username}님, 새로운 여행 일정이 만들어졌어요!
              <ClapBlueIcon />
            </p>
            <p>아래에 장소를 추가해 계획을 완성해보세요:)</p>
          </S.MessageBox>
          <TripPlanListPlaceHolder days={4} />
        </>
      )}
    </PageTemplate>
  );
}

export default MyTripDetailPage;
