import PageTemplate from "../components/common/PageTemplate";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";
import MyScheduleCard from "../components/mytrip/MyScheduleCard";

import ScheduleContent from "../components/mytrip/ScheduleContent";
import CirclePlusIcon from "../assets/icons/circlePlus.svg?react";
import CircleRightChevronIcon from "../assets/icons/circleRightChevron.svg?react";
import RightChevronIcon from "../assets/icons/rightChevron.svg?react";
import CalendarAddIcon from "../assets/icons/calendarAdd.svg?react";

import * as S from "../styles/pages/SchedulePage.style";

function MyTripPage() {
	const FLAG = true;
    return (
        <PageTemplate nav={true} header={false}>
			<S.Container>
				{/* Heading */}
				{FLAG ? 
					(
					<S.ContainerWithPlan>
						<S.HeadingContainerWithPlan >
							<Heading size="md">
								나의 다가오는 여행
							</Heading>
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
						<S.CreateMyTripScheduleBtn>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 5C9.6203 5 9.3065 5.28215 9.2568 5.64823L9.25 5.75V9.25H5.75C5.33579 9.25 5 9.5858 5 10C5 10.3797 5.28215 10.6935 5.64823 10.7432L5.75 10.75H9.25V14.25C9.25 14.6642 9.5858 15 10 15C10.3797 15 10.6935 14.7178 10.7432 14.3518L10.75 14.25V10.75H14.25C14.6642 10.75 15 10.4142 15 10C15 9.6203 14.7178 9.3065 14.3518 9.2568L14.25 9.25H10.75V5.75C10.75 5.33579 10.4142 5 10 5Z" fill="#D3D3D3"/>
								</svg>
								새로운 여행 일정 만들기
						</S.CreateMyTripScheduleBtn>
					</S.ContainerWithPlan>
					)
				:	(
					<>
						<S.HeadingContainer>
							<Heading size="md">최민석 님</Heading>
							<Heading size="md">
								<S.HeadingShadow>
									아직 여행 일정이 없어요
								</S.HeadingShadow>
							</Heading>
						</S.HeadingContainer>

						{/* Create Schedule */}
						<S.CreateMyTripContainer>
							<S.CreateMyTripTextWrapper>
								<S.CreateMyTripText>
									<S.TextHighlight>여행 일정을 생성</S.TextHighlight>하여
									여행 계획을 세워보세요!
								</S.CreateMyTripText>
								<CalendarAddIcon />
							</S.CreateMyTripTextWrapper>
							<S.SeperateLine />
							<S.ButtonWrapper>
								<Button size="sm" type="text">
									<S.ButtonText>
										일정 생성하기 
										<CircleRightChevronIcon />
									</S.ButtonText>
								</Button>
							</S.ButtonWrapper>
						</S.CreateMyTripContainer>
					</>
					)
				}
				
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
				<S.FloatingBtnWrapper>
					<CirclePlusIcon />
				</S.FloatingBtnWrapper>
			</S.Container>
        </PageTemplate>
    );
}

export default MyTripPage;
