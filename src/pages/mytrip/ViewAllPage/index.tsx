import { useEffect, useRef, useState } from "react";
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
        "regions": string[],
        "thumbnailURL": string
    }[]
}


function ViewAllPage() {
    const [tripData, setTripData] = useState<travelResponseType["results"]>([]);
    const [next, setNext] = useState<travelResponseType["next"]>(null);
    const infiniteScroll = useRef<HTMLDivElement>(null);

    useEffect(() => {
        get<travelResponseType>(`/my-travel/all`)
            .then((response) => {
                setTripData(response.data.results);
                setNext(response.data.next);
            })
    }, [])


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting && next) {
                    get<travelResponseType>(next)
                        .then((response) => {
                            setTripData([...tripData, ...response.data.results]);
                            setNext(response.data.next);
                        })
                }
            })
        })

        if(infiniteScroll.current) {
            observer.observe(infiniteScroll.current);
        }

        return () => observer.disconnect();
    })

    return(
        <PageTemplate nav={null} header={
            <PageHeader>
                <Typography.Headline size="sm">내 여행 기록</Typography.Headline>
            </PageHeader>
        }>
            <S.CardList>
                {
                    tripData.map((trip) => <MyLastScheduleCard {...trip} />)
                }
                <div ref={infiniteScroll}></div>
            </S.CardList>
        </PageTemplate>
    )
}

export default ViewAllPage;