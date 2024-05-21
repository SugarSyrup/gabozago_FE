import LocationIcon from "../../../assets/icons/location.svg?react";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import LogoSmallIcon from "../../../assets/icons/logo_small_blue04_text.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";

import Typography from "../../common/Typography";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useMyTripModal from "../../../hooks/useMyTripModal";


interface Props {
    "id": number,
    "title": string,
    "departure_date": string
    "arrival_date": string,
    "regions": string[]
}

function MyLastScheduleCard({
    id,
    title,
    departure_date,
    arrival_date,
    regions,
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
                        <LogoSmallIcon />
                    </S.ThumbnailWrapper>
                    <S.TextContainer>
                        <Typography.Title size="md" noOfLine={2}>{title}</Typography.Title>
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
                    <S.MenuIcon onClick={() => {modalOpen()}}>
                        <KebabMenuIcon />
                    </S.MenuIcon>
                </S.InfoContainer>
            </S.Card>
        </>
    );
}

export default MyLastScheduleCard;
