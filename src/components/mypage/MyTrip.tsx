import Heading from "../common/Heading";
import TripList from "./TripList";

import * as S from "../../styles/mypage/MyTrip.style";
import Button from "../common/Button";
import CirclePlusIcon from "../../assets/icons/circlePlus.svg?react";

function MyTrip() {
    return(
        <S.Container>
            <Heading size="sm">나의 다가오는 여행</Heading>
            <TripList />
            <S.CreateMyTrip to="/mytrip/create">
                <Button type="text" size="md">
                    <CirclePlusIcon />
                    <span>새로운 여행 일정 만들기</span>
                </Button>
            </S.CreateMyTrip>
            <Heading size="sm">지난 여행</Heading>
            <TripList />
        </S.Container>
    )
}

export default MyTrip;