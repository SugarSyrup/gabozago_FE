import Heading from "../common/Heading";
import TripList from "./TripList";

import * as S from "../../styles/ProfilePage/UserTrip.style";
import Button from "../common/Button";
import CirclePlusIcon from "../../assets/icons/circlePlus.svg?react";

interface Props {
    username : string;
}

function UserTrip({username} : Props) {
    return(
        <S.Container>
            <Heading size="sm">{username} 의 다가오는 여행</Heading>
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

export default UserTrip;