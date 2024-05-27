import { useState } from "react";

import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import LocationIcon from "../../../assets/icons/location.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import SmallLogoIcon from "../../../assets/icons/logo_small.svg?react";
import useMyTripModal from "../../../hooks/useMyTripModal";
import Typography from "../../common/Typography";

import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
    id: number,
    title: string,
    departureDate: string,
    arrivalDate: string,
    location: string[]
}

function TripItem({id, title, location, departureDate, arrivalDate}: Props) {
    const navigate = useNavigate();
    const {MyTripModal, modalOpen, modalClose, isModalOpend} = useMyTripModal({
        id: id,
        title: title,
        departureDate: departureDate,
        arrivalDate: arrivalDate,
    })

    return(
        <>
            <MyTripModal />
            <S.Container onClick={() => {navigate(`/mytrip/${id}`)}}>
                <S.ThumbnailWrapper>
                    <SmallLogoIcon />
                </S.ThumbnailWrapper>
                <S.Info>
                    <S.Name><Typography.Title size="md">{title}</Typography.Title></S.Name>
                    <S.Desc><CalendarIcon /> <Typography.Label size="md" color="#424242">{departureDate} ~ {arrivalDate}</Typography.Label></S.Desc>
                    <S.Desc><LocationIcon /> <Typography.Label size="md" color="#424242">{location.toLocaleString()}</Typography.Label></S.Desc>
                </S.Info>
                <S.OptionWrapper onClick={() => {
                        modalOpen();
                    }}>
                    <KebabMenuIcon />
                </S.OptionWrapper>
            </S.Container>
        </>
    )
}

export default TripItem;