import * as S from "../../styles/tripDetail/TripInfo.style";
import Heading from "../common/Heading";
import EditIcon from "../../assets/icons/edit.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import BusIcon from "../../assets/icons/bus.svg?react";
interface Props {
  size?: "default" | "sm";
}
function TripInfo({ size = "default" }: Props) {
  return (
    <S.Container>
      <S.Header>
        <Heading size="lg">즐거운 부산 여행</Heading>
        <S.EditButton>
          편집
          <EditIcon />
        </S.EditButton>
      </S.Header>
      <S.DetailList>
        <S.DetailItem>
          <span>
            <CalendarIcon />
            <span>여행일자</span>
          </span>
          <span>12. 20 - 12. 23 / 3박 4일</span>
        </S.DetailItem>
        <S.DetailItem>
          <span>
            <BusIcon />
            <span>이동수단</span>
          </span>
          <span>대중교통</span>
        </S.DetailItem>
      </S.DetailList>
    </S.Container>
  );
}

export default TripInfo;
