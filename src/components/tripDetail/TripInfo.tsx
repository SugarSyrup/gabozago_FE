import * as S from "../../styles/tripDetail/TripInfo.style";
import Heading from "../common/Heading";
import EditIcon from "../../assets/icons/edit.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import BusIcon from "../../assets/icons/bus.svg?react";
interface Props {
  size?: "default" | "small";
  title: string;
  departuereDate: Date;
  arrivalDate: Date;
  days: number;
  transport: string;
}
function TripInfo({
  size = "default",
  title,
  departuereDate,
  arrivalDate,
  days,
  transport,
}: Props) {
  const duration = [
    departuereDate.toLocaleDateString("ko-KR").slice(2),
    arrivalDate.toLocaleDateString("ko-KR").slice(2),
  ];
  if (departuereDate.getFullYear === arrivalDate.getFullYear) {
    duration[0] = duration[0].slice(4);
    duration[1] = duration[1].slice(4);
  }

  return (
    <S.Container>
      <S.Header size={size === "default" ? "default" : "small"}>
        <Heading size={size === "default" ? "lg" : "md"}>{title}</Heading>
        <S.EditButton>
          편집
          <EditIcon />
        </S.EditButton>
      </S.Header>
      <S.DetailList column={size === "default" ? true : false}>
        <S.DetailItem size={size === "default" ? "default" : "small"}>
          <span>
            <CalendarIcon />
            <span>여행일자</span>
          </span>
          <span>
            {duration[0]} - {duration[1]} / {days - 1}박 {days}일
          </span>
        </S.DetailItem>
        <S.DetailItem size={size === "default" ? "default" : "small"}>
          <span>
            <BusIcon />
            <span>이동수단</span>
          </span>
          <span>{transport}</span>
        </S.DetailItem>
      </S.DetailList>
    </S.Container>
  );
}

export default TripInfo;
