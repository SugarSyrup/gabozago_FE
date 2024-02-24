import * as S from "../../styles/mypage/TripItem.style";
import MeatBallsMenuIcon from "../../assets/icons/meatballsMenu.svg?react";
import LocationIcon from "../../assets/icons/location.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";

interface Props {
    name:string;
    location:string;
    startDate: string;
    endDate: string;
}

function TripItem({name, location, startDate, endDate}: Props) {
    return(
        <S.Container>
            <S.ThumbnailWrapper></S.ThumbnailWrapper>
            <S.Info>
                <S.Name>{name}</S.Name>
                <S.Desc><LocationIcon /> {location}</S.Desc>
                <S.Desc><CalendarIcon /> {startDate} - {endDate}</S.Desc>
            </S.Info>
            <S.OptionWrapper>
                <MeatBallsMenuIcon />
            </S.OptionWrapper>
        </S.Container>
    )
}

export default TripItem;