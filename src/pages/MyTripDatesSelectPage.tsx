import PageTemplate from "../components/common/PageTemplate";

import XIcon from "../assets/icons/grayx.svg?react";
import * as S from "../styles/pages/MyTripDatesSelectPage.style";
import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

import CalendarContainer from "../components/mytrip/CalendarContainer";

function MyTripDatesSelectPage() {
    return(
    <>
        <PageTemplate header={false} nav={false}>
            <Link to="/mytrip" style={{cursor:"pointer"}}>
                <XIcon/>
            </Link>
            <S.HeadingWrapper>
                <Heading size="sm">여행 날짜를 선택해주세요.</Heading>
            </S.HeadingWrapper>
            <CalendarContainer />
            <S.Footer>
                <Button
                    size="lg"
                    type="normal"
                    disabled={true}
                    active={false}
                >
                    날짜를 선택해주세요.
                </Button>
            </S.Footer>
        </PageTemplate>
    </>)
}

export default MyTripDatesSelectPage;