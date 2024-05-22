import { useEffect, useState } from "react";

import { get } from "../../../utils/api";

import Typography from "../../common/Typography";
import RecommendationReviewItem from "../RecommendationReviewItem";

import * as S from "./style";

interface Props{
    locations: string[],
}

interface TRecommendData {
    "article":{
        "id": number,
        "title": string,
        "location": string[],
        "thumbnailURL": string,
        "claps": number,
        "comment": number,
        "bookmark": number
    },
    "short-form":{
        "id": number,
        "title": string,
        "location": string[],
        "videoId": string,
        "claps": number,
        "comment": number,
        "bookmark": number
    }
}

function LocationRecommendContents({locations} : Props) {
    const [data, setData] = useState<TRecommendData>();

    useEffect(() => {
        get<TRecommendData>(`my-travel/location/content?location=${locations.toLocaleString()}`)
            .then((response) => {
                setData(response.data);
            })
    }, [])

    return(
        <>
            
            { data &&  <Typography.Title size="lg">추가한 여행지를 포함한 콘텐츠 제공</Typography.Title> }
            <S.RecommendatoinReviewList>
                {
                    data && 
                    <>
                        <RecommendationReviewItem
                            type="article"
                            id={data.article.id}
                            name={data.article.title}
                            location={data.article.location}
                            thumbnailURL={data.article.thumbnailURL}
                            hearts={data.article.claps}
                            comments={data.article.comment}
                            scraps={data.article.bookmark}
                        />
                        <RecommendationReviewItem
                            type="short-form"
                            id={data["short-form"].id}
                            videoId={data["short-form"].videoId}
                            name={data["short-form"].title}
                            location={data["short-form"].location}
                            hearts={data["short-form"].claps}
                            comments={data["short-form"].comment}
                            scraps={data["short-form"].bookmark}
                        />
                    </>
                }
            </S.RecommendatoinReviewList>
        </>
    )
}

export default LocationRecommendContents;