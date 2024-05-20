import * as S from "./style";

import LogoIcon from "../../../assets/icons/logo_small.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import LocationIcon from "../../../assets/icons/location.svg?react";
import Typography from "../../common/Typography";
import { useState } from "react";

interface Props {
    "id": number,
    "name": string,
    "departureDate": string,
    "arrivalDate": string,
    "location": string[],
    "days": {
        "day": number,
        "date": string,
        "dayOfWeek": string,
    }[],
    "thumbnailURL": string,
}

function LocationAddItem({id, name, departureDate, arrivalDate, location, days, thumbnailURL}: Props) {
    const [isItemClick, setIsItemClick] = useState<boolean>(false);
    const [clickedDay, setClickedDay] = useState<number>(-1);

    return(
        <S.Container>
            <S.InfoContainer onClick={() => {setIsItemClick(prev => !prev)}}>
                <S.MyTravelItemThumbnailWrapper>
                    {
                        thumbnailURL !== "" ?
                        <LogoIcon />
                        :
                        <img src={thumbnailURL} />
                    }
                </S.MyTravelItemThumbnailWrapper>
                <S.MyTravelItemTextContainer>
                    <Typography.Title size="md">{name}</Typography.Title>
                    <S.MyTravelItemText>
                        <CalendarIcon />
                        <Typography.Label size="md" color="inherit">{departureDate} ~ {arrivalDate}</Typography.Label>
                    </S.MyTravelItemText>
                    <S.MyTravelItemText>
                        <LocationIcon />
                        <Typography.Label size="md" color="inherit">{location}</Typography.Label>
                    </S.MyTravelItemText>
                </S.MyTravelItemTextContainer>
            </S.InfoContainer>
            {
                isItemClick &&
                <S.DayList>
                    {
                        days.map((day, index) => 
                            <S.DayItem isClicked={index === clickedDay} onClick={() => {setClickedDay(index)}}>
                                <Typography.Label size="lg" color="inherit">Day {day.day}</Typography.Label>
                                <Typography.Label size="sm">{day.date}({day.dayOfWeek})</Typography.Label>
                            </S.DayItem>
                        )
                    }
                </S.DayList>
            }
        </S.Container>
    )
}

export default LocationAddItem;