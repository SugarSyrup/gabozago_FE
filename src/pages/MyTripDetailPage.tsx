import PageTemplate from "../components/common/PageTemplate";
import TripInfo from "../components/tripDetail/TripInfo";
import * as S from "../styles/MyTripDetailPage.style";
import ClapBlueIcon from "../assets/icons/clap_blue.svg?react";
import TripScheduleListPlaceHolder from "../components/tripDetail/TripScheduleListPlaceHolder";

function MyTripDetailPage() {
  return (
    <PageTemplate nav={true} header={false}>
      <TripInfo />
      <S.MessageBox>
        <p>
          최민석님, 새로운 여행 일정이 만들어졌어요!
          <ClapBlueIcon />
        </p>
        <p>아래에 장소를 추가해 계획을 완성해보세요:)</p>
      </S.MessageBox>
      <TripScheduleListPlaceHolder days={4} />
    </PageTemplate>
  );
}

export default MyTripDetailPage;
