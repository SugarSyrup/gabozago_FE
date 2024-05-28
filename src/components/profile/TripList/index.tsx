import { useEffect, useState } from "react";
import TripItem from "../TripItem";

import * as S from "./style";
import { get } from "../../../utils/api";

interface travelType {
    id: number,
    title: string,
    departureDate: string,
    arrivalDate: string,
    location: string[],
    thumbnailURL: string,
}

function TripList() {
    const [data, setData] = useState<travelType[]>([]);
    useEffect(() => {
        get<travelType[]>(`/user/profile/my-travel`)
            .then((response) => {
                setData(response.data);
            })
    }, [])
    
    return(<>
        <S.List>
            {data.map((trip) => <TripItem {...trip} />)}
        </S.List>
    </>)
}

export default TripList;