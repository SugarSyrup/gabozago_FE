import { useEffect, useState } from "react";
import PageHeader from "../../../components/common/PageHeader";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";
import MyLastScheduleCard from "../../../components/mytrip/MyLastScheduleCard";

import * as S from "./style";
import { get } from "../../../utils/api";

interface travelResponseType {
    next: string | null,
    previous: string | null,
    results: {
        "id": number,
        "title": string,
        "departure_date": string
        "arrival_date": string,
        "regions": string[]
    }[]
}


function ViewAllPage() {
    const [tripData, setTripData] = useState<travelResponseType["results"]>([]);

    useEffect(() => {
        get<travelResponseType>(`/my-travel/all`)
        .then((response) => {
            console.log(response);
            setTripData(response.data.results);
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