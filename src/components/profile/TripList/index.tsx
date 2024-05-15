import { useEffect } from "react";
import { userTripData } from "../../../assets/data/userpageData";
import TripItem from "../TripItem";

import * as S from "./style";
import { get } from "../../../utils/api";

interface travelType {
    id: number,
    title: string,
    departureDate: string,
    arrivalDate: string,
    location: string[]
}

function TripList() {
    useEffect(() => {
        get<travelType>(`${import.meta.env.VITE_BASE_URL}user/profile/my-travel`)
            .then((response) => {
            //[SugarSyrup] @TODO: 백엔드 아직 미 업데이트! -> 유저 여행 계획 data 불러온 정보 표시
            })
    }, [])
    
    return(<>
        <S.List>
            {userTripData.map((trip) => <TripItem {...trip} />)}
        </S.List>
    </>)
}

export default TripList;