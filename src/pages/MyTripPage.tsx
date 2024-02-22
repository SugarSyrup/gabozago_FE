import PageTemplate from "../components/common/PageTemplate";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import MyScheduleCard from "../components/mytrip/MyScheduleCard";

import ScheduleContent from "../components/mytrip/ScheduleContent";
import CirclePlusIcon from "../assets/icons/circlePlus.svg?react";
import BlueCirclePlusIcon from "../assets/icons/blueCirclePlus.svg?react";
import CircleRightChevronIcon from "../assets/icons/circleRightChevron.svg?react";
import RightChevronIcon from "../assets/icons/rightChevron.svg?react";
import CalendarAddIcon from "../assets/icons/calendarAdd.svg?react";

import * as S from "../styles/pages/SchedulePage.style";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { datesState } from "../recoil/mytrip/createData";

function MyTripPage() {
  const FLAG = false;
  const setDates = useSetRecoilState(datesState);

  function initializeDates() {
    setDates({
      startDate: "",
      endDate: "",
    });
  }

  return (
    <PageTemplate>
      {/* Heading */}
      {FLAG ? (
        <S.ContainerWithPlan>
          <S.HeadingContainerWithPlan>
            <Heading size="md">나의 다가오는 여행</Heading>
            <S.ScheduleAllBtn>
              전체 보기
              <RightChevronIcon />
            </S.ScheduleAllBtn>
          </S.HeadingContainerWithPlan>

          <S.ScheduleCardContainer>
            <MyScheduleCard
              title="여행제목"
              startDate="NNNN.NN.NN"
              endDate="NN.NN"
              places={["여행지역"]}
              highlight={true}
            />
            <MyScheduleCard
              title="여행제목"
              startDate="NNNN.NN.NN"
              endDate="NN.NN"
              places={["여행지역"]}
              highlight={false}
            />
          </S.ScheduleCardContainer>
          <Link to="/mytrip/create" onClick={() => initializeDates()}>
            <S.CreateMyTripScheduleBtn>
              <CirclePlusIcon />
              새로운 여행 일정 만들기
            </S.CreateMyTripScheduleBtn>
          </Link>
        </S.ContainerWithPlan>
      ) : (
        <>
          <S.HeadingContainer>
            <Heading size="md">최민석 님</Heading>
            <Heading size="md">
              <S.HeadingShadow>아직 여행 일정이 없어요</S.HeadingShadow>
            </Heading>
          </S.HeadingContainer>

          {/* Create Schedule */}
          <S.CreateMyTripContainer>
            <S.CreateMyTripTextWrapper>
              <S.CreateMyTripText>
                <S.TextHighlight>여행 일정을 생성</S.TextHighlight>
                하여 여행 계획을 세워보세요!
              </S.CreateMyTripText>
              <CalendarAddIcon />
            </S.CreateMyTripTextWrapper>
            <S.SeperateLine />
            <S.ButtonWrapper>
              <Link to="/mytrip/create" onClick={() => initializeDates()}>
                <Button size="sm" type="text">
                  <S.ButtonText>
                    일정 생성하기
                    <CircleRightChevronIcon />
                  </S.ButtonText>
                </Button>
              </Link>
            </S.ButtonWrapper>
          </S.CreateMyTripContainer>
        </>
      )}

      {/* Contents */}
      <S.ContentHeadingWrappper>
        <Heading size="md">새 여행계획을 세워보세요!</Heading>
      </S.ContentHeadingWrappper>
      <S.ContentContainer>
        <ScheduleContent
          imgURL="abc"
          heading="제목"
          content="본문"
          currentBookMarked={true}
        />
        <ScheduleContent
          imgURL="abc"
          heading="제목"
          content="본문"
          currentBookMarked={true}
        />
        <ScheduleContent
          imgURL="abc"
          heading="제목"
          content="본문"
          currentBookMarked={true}
        />
        <ScheduleContent
          imgURL="abc"
          heading="제목"
          content="본문"
          currentBookMarked={true}
        />
        <ScheduleContent
          imgURL="abc"
          heading="제목"
          content="본문"
          currentBookMarked={true}
        />
        <ScheduleContent
          imgURL="abc"
          heading="제목"
          content="본문"
          currentBookMarked={true}
        />
      </S.ContentContainer>

      <Link to="/mytrip/create" onClick={() => initializeDates()}>
        <S.FloatingBtnWrapper>
          <BlueCirclePlusIcon />
        </S.FloatingBtnWrapper>
      </Link>
    </PageTemplate>
  );
}

export default MyTripPage;
