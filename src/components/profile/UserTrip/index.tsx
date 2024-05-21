import ChevronRightIcon from "../../../assets/icons/chevron_right.svg?react";
import CirclePlusIcon from "../../../assets/icons/plus_circle.svg?react";

import Button from "../../common/Button";
import Typography from "../../common/Typography";

import TripList from "../TripList";
import * as S from "./style";

function UserTrip() {
  return (
    <S.Container>
      <TripList />
      <S.Header>
        <Typography.Title size="md" color="#424242">여행 날짜 순</Typography.Title>
        <S.TravelLink to="/mytrip/all">
          <Typography.Body size="lg" color="#424242">전체보기</Typography.Body>
          <ChevronRightIcon />
        </S.TravelLink>
      </S.Header>
      <S.CreateMyTrip to="/mytrip/create">
        <Button type="text" size="md">
          <CirclePlusIcon />
          <Typography.Title size="md" color="#484848">새로운 여행 일정 만들기</Typography.Title>
        </Button>
      </S.CreateMyTrip>
    </S.Container>
  );
}

export default UserTrip;
