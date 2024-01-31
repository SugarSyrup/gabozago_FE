import * as S from "../../styles/tripDetail/TripInfo.style";
import Heading from "../common/Heading";
import EditIcon from "../../assets/icons/edit.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import BusIcon from "../../assets/icons/bus.svg?react";

interface Props {
  size?: "default" | "sm" | "xs";
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
  size = "xs";
  /** Heading 컴포넌트 size */
  enum headingSize {
    "default" = "lg", // 24px
    "sm" = "md", // 20px
    "xs" = "sm", // 16px
  }

  /** "[출발일] - [도착일]"을 YY.MM.DD 혹은 MM.DD 형식으로 출력 */
  const getTripDuration = () => {
    const dateToString = (
      date: Date,
      format: "YY.MM.DD" | "MM.DD" = "YY.MM.DD"
    ) => {
      const str = date.toLocaleDateString("ko-KR");
      if (format === "MM.DD") {
        return str.slice(6);
      } else {
        return str.slice(2);
      }
    };
    const isDprtArrSameYear =
      departuereDate.getFullYear === arrivalDate.getFullYear;

    let duration = [];

    if (isDprtArrSameYear) {
      // 같은 해이면 "MM.DD"
      duration = [
        dateToString(departuereDate, "MM.DD"),
        dateToString(arrivalDate, "MM.DD"),
      ];
    } else {
      // 다른 해이면 "MM.DD"
      duration = [
        dateToString(departuereDate, "YY.MM.DD"),
        dateToString(arrivalDate, "YY.MM.DD"),
      ];
    }

    return `${duration[0]} - ${duration[1]}`;
  };

  return (
    <S.Container size={size}>
      <Heading size={headingSize[size]}>{title}</Heading>
      {size !== "xs" && (
        <S.EditButton>
          편집
          <EditIcon />
        </S.EditButton>
      )}
      <S.DetailList size={size}>
        <S.DetailItem size={size}>
          {size !== "xs" && (
            <span>
              <CalendarIcon />
              <span>여행일자</span>
            </span>
          )}
          <span>
            {getTripDuration()} / {days - 1}박 {days}일
          </span>
        </S.DetailItem>
        {size !== "xs" && (
          <S.DetailItem size={size}>
            <span>
              <BusIcon />
              <span>이동수단</span>
            </span>
            <span>{transport}</span>
          </S.DetailItem>
        )}
      </S.DetailList>
    </S.Container>
  );

  // return (
  //   <S.Container>
  //     <S.Header size={size === "default" ? "default" : "small"}>
  //       <Heading size={size === "default" ? "lg" : "md"}>{title}</Heading>
  //       <S.EditButton>
  //         편집
  //         <EditIcon />
  //       </S.EditButton>
  //     </S.Header>
  //     <S.DetailList column={size === "default" ? true : false}>
  //       <S.DetailItem size={size === "default" ? "default" : "small"}>
  //         <span>
  //           <CalendarIcon />
  //           <span>여행일자</span>
  //         </span>
  //         <span>
  //           {duration[0]} - {duration[1]} / {days - 1}박 {days}일
  //         </span>
  //       </S.DetailItem>
  //       <S.DetailItem size={size === "default" ? "default" : "small"}>
  //         <span>
  //           <BusIcon />
  //           <span>이동수단</span>
  //         </span>
  //         <span>{transport}</span>
  //       </S.DetailItem>
  //     </S.DetailList>
  //   </S.Container>
  // );
}

export default TripInfo;
