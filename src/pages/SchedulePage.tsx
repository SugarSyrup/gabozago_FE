import PageTemplate from "../components/common/PageTemplate";
import Heading from "../components/common/Heading";
import ScheduleContent from "../components/schedule/ScheduleContent";
import CirclePlusIcon from "../assets/icons/circlePlus.svg?react";

import * as S from "../styles/pages/SchedulePage.style";
import MyScheduleCard from "../components/schedule/MyScheduleCard";

function SchedulePage() {
    return (
        <PageTemplate nav={true} header={false}>
            <div style={{ padding: "20px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                    }}
                >
                    <Heading size="md">최민석 님</Heading>
                    <Heading
                        size="md"
                        //style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    >
                        아직 여행 일정이 없어요
                    </Heading>
                </div>
                <ScheduleContent
                    imgURL="abc"
                    heading="제목"
                    content="본문"
                    currentBookMarked={true}
                />
                <MyScheduleCard
                    title="여행제목"
                    startDate="NNNN.NN.NN"
                    endDate="NN.NN"
                    places={["여행지역"]}
                />
                <S.FloatingBtnWrapper>
                    <CirclePlusIcon />
                </S.FloatingBtnWrapper>
            </div>
        </PageTemplate>
    );
}

export default SchedulePage;
