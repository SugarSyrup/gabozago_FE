import { useEffect, useState } from "react";

import Headline from "../../common/Typography/Headline";
import Label from "../../common/Typography/Label";
import Title from "../../common/Typography/Title";

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";

import * as S from "./style";
import ShortFormList from "../journals/shortform/ShortFormList";
import { get } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

interface TArticle {
    "next": null | string,
    "previous": null | string,
    "results": {
        "id": number,
        "title": string,
        "thumbnailURL": string,
        "subtitle": string,
        "isBookmarked": boolean
    }[]
}

interface TShortForms {
    "next": string | null,
    "previous": string | null,
    "results": {
        "id": number,
        "title": string,
        "videoId": string,
        "region": string[],
        "theme": string[],
        "views": number
    }[]
}

function Recommendation() {
    const navigate = useNavigate();
    const [articleData, setArticleData] = useState<TArticle['results']>([]);
    const [shortformData, setShortformData] = useState<TShortForms['results']>([]);

    useEffect(() => {
        get<TArticle>('/community/article')
            .then((response) => {
                setArticleData(response.data.results);
            })
        get<TShortForms>('/community/short-from?ordering=alltime_popular')
            .then((response) => {
                setShortformData(response.data.results);
            })
    }, [])

    return(
        <>
            <S.ContentsContainer>
                <Headline size="sm">금주 인기 아티클 Top 5 🔥</Headline>
                <S.Slider>
                    {
                        articleData?.slice(0,5).map((article) => <S.TopSliderItem onClick={() => {navigate(`/article/${article.id}`)}}>
                                <S.SliderImg src={article.thumbnailURL}/>
                                <Label size="lg" noOfLine={2}>{article.title}</Label>
                                <BookMarkIcon />
                            </S.TopSliderItem>
                        )
                    }
                </S.Slider>
            </S.ContentsContainer>
            <S.ContentsContainer>
                <Title size="lg">인기 Top 6-10 아티클</Title>
                <S.Slider>
                    {
                        articleData?.slice(5,articleData.length).map((article) => <S.SliderItem onClick={() => {navigate(`/article/${article.id}`)}}>
                                <S.SliderImg src={article.thumbnailURL}/>
                                <Label size="lg" noOfLine={2}>{article.title}</Label>
                                <BookMarkIcon />
                            </S.SliderItem>
                        )
                    }
                </S.Slider>
            </S.ContentsContainer>
            <S.ContentSpace />
            <S.ContentsContainer>
                <Headline size="sm">인기 숏폼 콘텐츠</Headline>
                <S.ShortFormListContainer>
                    <ShortFormList data={shortformData}/>
                </S.ShortFormListContainer>
            </S.ContentsContainer>
        </>
    )
}

export default Recommendation;