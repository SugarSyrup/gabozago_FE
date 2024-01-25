import PageTemplate from "../components/common/PageTemplate";
import TripInfo from "../components/tripDetail/TripInfo";
import * as S from "../styles/MyTripDetailPage.style";
import ClapBlueIcon from "../assets/icons/clap_blue.svg?react";
import TripPlanListPlaceHolder from "../components/tripDetail/TripPlanListPlaceHolder";
import TripPlanList from "../components/tripDetail/TripPlanList";
import { data as planData } from "../assets/data/tripPlanData";

function MyTripDetailPage() {
  const username = "최민석";
  const data = planData;

  return (
    <PageTemplate nav={true} header={false}>
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
      <TripPlanList plan={data.plan} />
      {/* <TripPlanListPlaceHolder days={4} /> */}
    </PageTemplate>
  );
}

export default MyTripDetailPage;
