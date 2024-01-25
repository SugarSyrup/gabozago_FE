import PageTemplate from "../components/common/PageTemplate";
import TripInfo from "../components/tripDetail/TripInfo";
import * as S from "../styles/MyTripDetailPage.style";
import ClapBlueIcon from "../assets/icons/clap_blue.svg?react";
import TripPlanListPlaceHolder from "../components/tripDetail/TripPlanListPlaceHolder";
import TripPlanList from "../components/tripDetail/TripPlanList";

function MyTripDetailPage() {
  const username = "최민석";
  const data = {
    title: "즐거운 부산 여행",
    departureDate: new Date("2024-12-20"), // 출발
    arrivalDate: new Date("2024-12-23"), // 도착
    days: 4,
    transport: "대중교통",
    plan: [
      {
        day: 1,
        date: new Date("2024-12-20"),
        dayOfWeek: "수",
        route: [
          {
            placeName: "더베이베이커리",
            theme: "베이커리",
            placeImage:
              "https://placehold.co/300x300/738DEC/white?text=go&font=roboto",
            memo: "",
            transfort: "",
            travelTime: "",
          },
          {
            placeName: "장소명",
            theme: "테마",
            placeImage:
              "https://placehold.co/300x300/738DEC/white?text=go&font=roboto",
            memo: "",
            transfort: "",
            travelTime: "15분",
          },
        ],
      },
      {
        day: 2,
        date: new Date("2024-12-21"),
        dayOfWeek: "목",
        route: [],
      },
      {
        day: 3,
        date: new Date("2024-12-22"),
        dayOfWeek: "목",
        route: [],
      },
      {
        day: 4,
        date: new Date("2024-12-23"),
        dayOfWeek: "토",
        route: [],
      },
    ],
  };

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
