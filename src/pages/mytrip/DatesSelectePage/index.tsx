import { Link } from "react-router-dom";

import * as S from "./style";
import XIcon from "../../../assets/icons/grayx.svg?react";
import PageTemplate from "../../../components/common/PageTemplate";
import Heading from "../../../components/common/Heading";

import CalendarContainer from "../../../components/mytrip/CalendarContainer";

function MyTripDatesSelectPage() {
    return(
    <>
        <PageTemplate nav={false}>
            <Link to="/mytrip" style={{cursor:"pointer"}}>
                <XIcon/>
            </Link>
            <S.HeadingWrapper>
                <Heading size="sm">여행 날짜를 선택해주세요.</Heading>
            </S.HeadingWrapper>
            <CalendarContainer />
        </PageTemplate>
    </>)
}

export default MyTripDatesSelectPage;