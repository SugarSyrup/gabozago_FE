import { useEffect, useState } from "react";
import PageHeader from "../../../components/common/PageHeader";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";
import MyLastScheduleCard from "../../../components/mytrip/MyLastScheduleCard";

import * as S from "./style";
import { get } from "../../../utils/api";

type travelResponseType = {
    "id": number,
    "title": string,
    "departure_date": string
    "arrival_date": string,
    "regions": string[]
  }[]

function ViewAllPage() {
    const [tripData, setTripData] = useState<travelResponseType>([]);

    useEffect(() => {
        get<travelResponseType>(`${import.meta.env.VITE_BASE_URL}my-travel/all`)
        .then((response) => {
            setTripData(response.data);
        })
    }, [])

    return(
        <PageTemplate nav={null}>
            <PageHeader>
                <Typography.Headline size="sm">내 여행 기록</Typography.Headline>
            </PageHeader>
            <S.CardList>
                {
                    tripData.map((trip) => <MyLastScheduleCard {...trip} />)
                }
            </S.CardList>
        </PageTemplate>
    )
}

export default ViewAllPage;