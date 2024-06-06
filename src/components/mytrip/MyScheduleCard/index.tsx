import { useNavigate } from "react-router-dom";

import LocationIcon from "../../../assets/icons/location.svg?react";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import LogoSmallIcon from "../../../assets/icons/logo_small_text.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import RightCircleIcon from "../../../assets/icons/chevron_right_circle.svg?react";

import useMyTripModal from "../../../hooks/useMyTripModal";
import Typography from "../../common/Typography";
import * as S from "./style";


interface Props {
    "id": number,
    "title": string,
    "departure_date": string
    "arrival_date": string,
    "regions": string[],
    "thumbnailURL": string,
}

function MyScheduleCard({
    id,
    title,
    departure_date,
    arrival_date,
    regions,
    thumbnailURL,
}: Props) {
    const navigate = useNavigate();
    const {MyTripModal, modalOpen, modalClose, isModalOpend} = useMyTripModal({
        id: id,
        title: title,
        departureDate: departure_date,
        arrivalDate: arrival_date,
    })

    return (
        <>
            <MyTripModal />
            <S.Card>
                <S.InfoContainer>
                    <S.ThumbnailWrapper>
                        {
                            thumbnailURL ? 
                            <img src={thumbnailURL} alt="thumbnail" />
                            :
                            <LogoSmallIcon />
                        }
                    </S.ThumbnailWrapper>
                    <S.TextContainer>
                        <Typography.Title size="md" maxWidth={300} noOfLine={2}>{title}</Typography.Title>
                        <S.Infos>
                            <S.Info>
                                <CalendarIcon />
                                <Typography.Label size="md" color="#424242">{departure_date} ~ {arrival_date}</Typography.Label>
                            </S.Info>
                            <S.Info>
                                <LocationIcon />
                                {regions.map((region, idx) => <Typography.Label size="md" color="#424242">{region}{idx !== regions.length - 1 && ','}</Typography.Label>)}    
                            </S.Info>
                        </S.Infos>
                    </S.TextContainer>
                    <S.MenuIcon  onClick={() => {modalOpen()}}>
                        <KebabMenuIcon/>
                    </S.MenuIcon>
                </S.InfoContainer>
                <S.ButtonContainer>
                    <S.ButtonValue onClick={() => {navigate(`/mytrip/${id}`)}}>
                        <Typography.Label size="lg" color="#5276FA">일정 보러가기</Typography.Label>
                        <RightCircleIcon />
                    </S.ButtonValue>
                </S.ButtonContainer>
            </S.Card>
        </>
    );
}

export default MyScheduleCard;
